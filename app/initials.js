module.exports = function initials (name) {
  return name.split(' ')
    .map(function (word) { return word.charAt(0); })
    .join('')
    .toUpperCase();
};
