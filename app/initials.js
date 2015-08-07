module.exports = function initials (fullName) {
  function firstAndLastNames(name) {
    var names = name.split(' ');
    names.splice(1, names.length-2);
    return names;
  }

  return firstAndLastNames(fullName)
    .map(function (word) { return word.charAt(0); })
    .join('')
    .toUpperCase();
};
