// This node script is ran during CI
// it generates languages.json and substitutes missing keys with english
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

const notEmpty = function (file) {
  const contents = flatten(loadFile(file));
  return Object.keys(contents).length > 0;
};

const hasCommonStringsTranslated = function (file, source) {
  const loadCommonTranslations = (f) => {
    var raw = loadFile(f);
    var common = raw.common || {};
    return flatten(common);
  };

  const lng = loadCommonTranslations(file);
  const src = loadCommonTranslations(source);

  return Object.keys(lng).length === Object.keys(src).length;
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
  const saveRaw = function(original) {
    fs.writeFileSync(file.replace("translation.json", "raw.json"), JSON.stringify(original, null, 3));
  };
  const dest = loadFile(file);
  saveRaw(dest);
  const source = flatten(loadFile(srcFile));
  const missing = findMissing(source, flatten(dest));
  if (missing.length === 0) {
    return;
  }
  missing.forEach((m) => set(dest, m, source[m]));
  fs.writeFileSync(file, JSON.stringify(dest, null, 3));
};

const files = getAllFiles("./i18n/locales");

let source = files.filter((f) => f.includes("/en/translation.json"));
if (source.length !== 1) {
  console.error("couldn't find source");
  process.exit(2);
}
source = source[0];

const langFiles = files.filter((f) => f.includes("translation.json"))
  .filter(notEmpty)
  .filter((f) => hasCommonStringsTranslated(f, source));

langFiles.forEach(f => substituteMissing(f, source));

const codes = langFiles.map(getCodeFromFilename);
fs.writeFileSync("./i18n/languages.json", JSON.stringify(codes));

console.log("Languages with common coverage:");
console.log(codes);


