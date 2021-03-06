require('dotenv').config();
// removed braces, the destructuring method, these provoked a problem within the files
const { PORT } = process.env;
const MONGODB_URI = process.env.NODE_ENV === 'test'
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI;

module.exports = {
  MONGODB_URI,
  PORT,
};
