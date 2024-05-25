const bcrypt = require("bcryptjs")
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

const comparePassword = async (reqPassword, userPassword) => {
  return await bcrypt.compare(reqPassword, userPassword)
}

const getHost = () => {
  const dns = require("dns");
  const os = require("os");
  return new Promise((resolve) => {
    dns.lookup(os.hostname(), (error, ip) => {
      resolve(`http://${ip}`)
    })
  })
}
module.exports = {
  hashPassword,
  comparePassword,
  getHost
};
