// This node script is ran during CI, it generates indexablePages.json
// It expects to be ran after a build
/* eslint-disable */

// This node script is ran during CI, it generates languages.json
/* eslint-disable */

const fs = require("fs");
const path = require("path");
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const indexablePages = require("./indexablePages.json");
const generatedLanguages = require("./languages.json").filter((lng) => lng !== "en");
const { htmlToText } = require('html-to-text');
var stringSimilarity = require("string-similarity");


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
  return htmlToText(buf.toString(), textExtractionOptions).replace(new RegExp("impactasaurus", "ig"), "");
};

const isSuitableCoverage = function (langFile, sourceFile) {
  if(langFile === sourceFile) {
    return true;
  }
  const src = loadHTMLText(sourceFile);
  const lang = loadHTMLText(langFile);
  if(langFile.includes("pt")) {
    console.log(src.split("\n").filter(s => s.length > 0));
    //console.log(lang);
  }
  const similarity = stringSimilarity.compareTwoStrings(src, lang);
  console.log(`${langFile} - ${similarity}`);
  return similarity < 0.75;
};

const getCodeFromFilename = function (file) {
  const c = file.split("/");
  if(c[1].length === 2) {
    return c[1];
  }
  return "en";
};

const indexableVersions = function (file) {
  return generatedLanguages
    .map((lng) => `/${lng}${file}`)
    .filter((lFile) => isSuitableCoverage(lFile, file));
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

  // match source docs to lang
  const pages = builtHtml.filter((f) => getCodeFromFilename(f) === "en").filter((f) => f.includes("security"));
  console.log(pages);
  const pathsToIndex = pages.reduce((a, p) => a.concat(indexableVersions(p)), []);
  console.log(pathsToIndex);

  // for each pair, assess difference

  // for those with adequate difference, add to output

  // compare output to original
  // if different, write to file and rerun build


  /*
  const suitableCodes = all.filter((f) => isSuitableCoverage(f, source)).map(getCodeFromFilename);
  fs.writeFileSync("./i18n/indexableLanguages.json", JSON.stringify(suitableCodes));

  all.forEach(f => substituteMissing(f, source));

  console.log("Languages with suitable coverage:");
  console.log(suitableCodes);
  process.exit(0);
  */
};

execute();


