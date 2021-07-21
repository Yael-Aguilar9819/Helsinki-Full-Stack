const palindrome = (string) => string
  .split('')
  .reverse()
  .join('');

const average = (array) => {
  const reducer = (sum, item) => sum + item;

  // If its not 0, will go correctly, otherwise will return 0
  return array.length === 0
    ? 0
    : array.reduce(reducer, 0) / array.length;
};

module.exports = {
  palindrome,
  average,
};
