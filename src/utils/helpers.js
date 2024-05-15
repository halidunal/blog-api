const md5 = require("md5");

const hashString = (string) => {
  return md5(string);
};

module.exports = {
  hashString,
};
