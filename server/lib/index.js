'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var CLIENT_PATH = (0, _path.join)(__dirname, '../../client');

app.use(_express2.default.static(CLIENT_PATH));
app.use(_express2.default.json());

app.use(_express2.default.urlencoded({ extended: true }));


app.listen(3000, function () {
  return console.log('Server is listening on port 3000');
});