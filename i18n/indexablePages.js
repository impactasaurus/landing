// This node script is ran during CI, it generates indexablePages.json
// It expects to be ran after a build
/* eslint-disable */

const fs = require("fs");
const path = require("path");
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const indexablePages = require("./indexablePages.json");
const generatedLanguages = require("./languages.json").filter((lng) => lng !== "en");
const { htmlToText } = require('html-to-text');
const cheerio = require('cheerio');


const getAllFiles = function (dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(dirPath + path.sep + file);
    }
  });

  return arrayOfFiles;
};

const textExtractionOptions = {
  wordwrap: false,
  baseElements: {
    selectors: [".main-content"]
  },
  selectors: [{
    selector: 'img',
    format: 'skip'
  }, {
    selector: '.no-translation',
    format: 'skip'
  }, {
    selector: 'hr',
    format: 'skip'
  }, {
    selector: 'a',
    options: {
      ignoreHref: true,
      noAnchorUrl: true
    }
  }]
};

const loadHTMLText = function (file) {
  const buf = fs.readFileSync(`./public${file}`);
  return htmlToText(buf.toString(), textExtractionOptions)
    .replace(new RegExp("impactasaurus", "ig"), "")
    .split("\n")
    .filter(s => s.length > 0);
};

const isSuitableCoverage = function (langFile, sourceFile) {
  if(langFile === sourceFile) {
    return true;
  }
  const src = loadHTMLText(sourceFile);
  const lang = loadHTMLText(langFile);
  if(langFile.includes("pt")) {
    //console.log(src);
    //console.log(lang);
  }
  if(src.length !== lang.length) {
    console.error(`paragraph count mismatch - ${langFile}`);
    process.exit(2);
  }
  const notTranslated = src.filter((s, i) => s === lang[i]);
  return notTranslated.length === 0;
};

const getCodeFromFilename = function (file) {
  const c = file.split("/");
  if(c[1].length === 2) {
    return c[1];
  }
  return "en";
};

const blockCrawlers = function (file) {
  const path = `./public${file}`;
  let str = fs.readFileSync(path).toString();
  if(str.includes('content="noindex"')) {
    return;
  }
  str = str.replace("<head>", '<head><meta name="robots" content="noindex" />');
  fs.writeFileSync(path, str, "utf8")
};

const processPage = function (page) {
  const pages = generatedLanguages
    .map((lng) => `/${lng}${page}`)
    .map((f) => ({file: f, index: isSuitableCoverage(f, page)}));
  pages
    .filter((o) => !o.index)
    .forEach((o) => blockCrawlers(o.file));
  return pages.filter((o) => o.index).map(o => o.file);
};

async function execute() {
  console.log("Assessing coverage...");

  const builtHtml = getAllFiles("./public")
    .filter((f) => path.extname(f) === ".html")
    .map((f) => f.replace('./public', ''));

  if (builtHtml.length === 0) {
    console.error("no html files in /public")
    process.exit(1);
  }

  const pages = builtHtml.filter((f) => getCodeFromFilename(f) === "en");

  const blocked = pages.reduce((arr, pg) => arr.concat(processPage(pg)), []);
  console.log("The following pages will be indexed:")
  console.log(blocked);
};

execute();


