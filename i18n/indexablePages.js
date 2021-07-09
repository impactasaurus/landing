// This node script is ran during CI, it generates indexablePages.json
// It expects to be ran after a build
/* eslint-disable */

const fs = require("fs");
const path = require("path");
const util = require('util');
const exec = require('child_process').exec;
const indexablePages = require("./indexablePages.json");
const generatedLanguages = require("./languages.json").filter((lng) => lng !== "en");
const { htmlToText } = require('html-to-text');


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
  const wordCount = (stringArr) => {
    return stringArr.reduce((ct, s) => ct + s.trim().split(/\s+/).length, 0);
  };
  const src = loadHTMLText(sourceFile);
  const lang = loadHTMLText(langFile);
  if(src.length !== lang.length) {
    console.error(`paragraph count mismatch - ${langFile}`);
    process.exit(2);
  }
  const notTranslated = src.filter((s, i) => s === lang[i]);
  return wordCount(notTranslated) / wordCount(src) < 0.1;
};

const getCodeFromFilename = function (file) {
  const c = file.split("/");
  if(c[1].length === 2) {
    return c[1];
  }
  return "en";
};

const processPage = function (page) {
  return generatedLanguages
    .map((lng) => `/${lng}${page}`)
    .filter((f) => isSuitableCoverage(f, page));
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
  const index = pages
    .reduce((arr, pg) => arr.concat(processPage(pg)), [])
    .map((f) => f.replace("index.html", ""));

  const toWrite = JSON.stringify(index);
  if(toWrite === JSON.stringify(indexablePages)) {
    console.log("Indexable locale pages up to date, no need to rebuild");
    process.exit(0);
  }

  console.log("The following pages will be indexed:")
  console.log(index);
  console.log("A rebuild is required...")

  fs.writeFileSync("./i18n/indexablePages.json", toWrite, "utf8");

  var proc = exec("npm run build");
  proc.stdout.pipe(process.stdout);
  proc.stderr.pipe(process.stderr);
  process.on('exit', (code) => {
    console.log('Build exited with code ' + code.toString());
    process.exit(code);
  })
};

execute();


