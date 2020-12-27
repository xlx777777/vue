'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _index = require('../routes/index');

var _index2 = _interopRequireDefault(_index);

var _httpErrors = require('http-errors');

var _httpErrors2 = _interopRequireDefault(_httpErrors);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// 使用cors解决跨域问题

app.use((0, _cors2.default)());

app.use((0, _cookieParser2.default)());

// 使用express-session保存用户登录状况
app.use((0, _expressSession2.default)({
  secret: _config2.default.secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: _config2.default.maxAge
  }
}));

// 请求体

app.use(_bodyParser2.default.urlencoded({ extended: false }));

// view engine setup
app.set('views', _config2.default.viewsPath);
app.set('view engine', 'ejs');

app.use((0, _morgan2.default)('dev'));
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: false }));
app.use(_express2.default.static(_config2.default.publicPath));

app.use('/', _index2.default);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next((0, _httpErrors2.default)(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(_config2.default.port, function () {
  console.log('\u670D\u52A1\u5668\u5DF2\u7ECF\u542F\u52A8, \u7AEF\u53E3\u662F: ' + _config2.default.port);
});

exports.default = app;