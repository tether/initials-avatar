var Canvas = require('canvas');

module.exports = function toPng (initials, backgroundColor, foregroundColor, options) {
  options = {
    width: options.width || 200,
    height: options.height || 200,
    fontWeight: options.fontWeight || 100,
    fontSize: options.fontSize || null,
    fontFamily: options.fontFamily || "'Lato', 'Lato-Regular', 'Helvetica Neue'",
    density: options.density || 1
  };

  var width = options.width;
  var height = options.height;
  var x = width / 2;
  var y = height / 2;
  var fontSize = options.fontSize || height / 2;

  var canvas = new Canvas(width * options.density, height * options.density);
  var context = canvas.getContext('2d');
  context.scale(options.density, options.density);
  context.rect(0, 0, canvas.width, canvas.height);
  context.fillStyle = backgroundColor;
  context.fill();
  context.font = '' + options.fontWeight + ' ' + fontSize + 'px ' + options.fontFamily;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillStyle = foregroundColor;
  context.fillText(initials, x, y);
  return canvas.pngStream();
};

