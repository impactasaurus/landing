// This node script is ran during CI, it generates languages.json and indexableLanguages.json
/* eslint-disable */

const fs = require("fs");
const path = require("path");

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

const loadFile = function (file) {
  const buf = fs.readFileSync(file);
  return JSON.parse(buf.toString());
};

const flatten = function (obj, prefix, current) {
  prefix = prefix || []
  current = current || {}
  if (typeof (obj) === 'object' && obj !== null) {
    Object.keys(obj).forEach(function(key) {
      flatten(obj[key], prefix.concat(key), current)
    })
  } else {
    if (obj !== "") {
      current[prefix.join('.')] = obj
    }
  }
  return current
};

const isSuitableCoverage = function (langFile, sourceFile) {
  if(langFile === sourceFile) {
    return true;
  }
  const src = flatten(loadFile(sourceFile));
  const lang = flatten(loadFile(langFile));
  const coverage = Object.keys(lang).length / Object.keys(src).length;
  return coverage >= 1;// && false; // && false whilst extracting all the strings
};

const notEmpty = function (file) {
  const contents = flatten(loadFile(file));
  return Object.keys(contents).length > 0;
};

const getCodeFromFilename = function (file) {
  const path = file.replace("/translation.json", "");
  const c = path.split("/");
  return c[c.length - 1];
};

const substituteMissing = function (file, srcFile) {
  const set = function (obj, path, value) {
    const elements = path.split(".");
    const key = elements[0];
    if(elements.length === 1) {
      obj[key] = value;
      return;
    }
    if (!obj[key]) {
      obj[key] = {};
    }
    set(obj[key], elements.splice(1).join('.'), value);
  };
  const findMissing = function (src, dest) {
    return Object.keys(src).filter((k) => !dest[k]);
  };
  const dest = loadFile(file);
  const source = flatten(loadFile(srcFile));
  const missing = findMissing(source, flatten(dest));
  if (missing.length === 0) {
    return;
  }
  missing.forEach((m) => set(dest, m, source[m]));
  fs.writeFileSync(file, JSON.stringify(dest, null, 3));
};

const files = getAllFiles("./i18n/locales");

const all = files.filter((f) => f.includes("translation.json")).filter(notEmpty);
const allCodes = all.map(getCodeFromFilename);
fs.writeFileSync("./i18n/languages.json", JSON.stringify(allCodes));

let source = files.filter((f) => f.includes("/en/translation.json"));
if (source.length !== 1) {
  console.error("couldn't find source");
  process.exit(2);
}
source = source[0];
const suitableCodes = all.filter((f) => isSuitableCoverage(f, source)).map(getCodeFromFilename);
fs.writeFileSync("./i18n/indexableLanguages.json", JSON.stringify(suitableCodes));

all.forEach(f => substituteMissing(f, source));

console.log("Languages with some coverage:");
console.log(allCodes);
console.log("Languages with suitable coverage:");
console.log(suitableCodes);
process.exit(0);
