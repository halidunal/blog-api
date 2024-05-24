const bcrypt = require("bcryptjs")
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

const comparePassword = async (reqPassword, userPassword) => {
  return await bcrypt.compare(reqPassword, userPassword)
}
module.exports = {
  hashPassword,
  comparePassword
};
