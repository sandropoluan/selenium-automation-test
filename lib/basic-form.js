"use strict";

var _startDriver = _interopRequireDefault(require("/core/startDriver"));

var _config = _interopRequireDefault(require("config"));

var _seleniumWebdriver = require("selenium-webdriver");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee2() {
  var driver;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _startDriver["default"])();

        case 2:
          driver = _context2.sent;
          _context2.prev = 3;
          _context2.next = 6;
          return driver.get("https://www.seleniumeasy.com/test/basic-first-form-demo.html");

        case 6:
          _context2.next = 8;
          return driver.findElement(_seleniumWebdriver.By.id("user-message")).sendKeys("Hello");

        case 8:
          _context2.prev = 8;
          setTimeout(
          /*#__PURE__*/
          _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return driver.quit();

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          })), 5000);
          return _context2.finish(8);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, null, [[3,, 8, 11]]);
}))();