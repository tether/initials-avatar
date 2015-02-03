var express = require('express');
var app = module.exports = express();

var toInitials = require('./initials');
var toHexColor = require('./string.to.hex');
var Avatar = require('./avatar');
var Color = require('color');

app.get('/:name', function (request, response) {
  var name = request.params.name.toUpperCase();
  var initials = toInitials(name);
  var bgColor = Color(toHexColor(name));
  var fgColor = bgColor.light() ? Color('black') : Color('white');

  var png = Avatar(initials, bgColor.hexString(), fgColor.hexString(), request.query)
  response.header('Content-Type', 'image/png');
  png.pipe(response);
});