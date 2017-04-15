'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.div = exports.mult = exports.subt = exports.add = undefined;

var _addition = require('./operations/addition');

var _addition2 = _interopRequireDefault(_addition);

var _subtraction = require('./operations/subtraction');

var _subtraction2 = _interopRequireDefault(_subtraction);

var _multiplication = require('./operations/multiplication');

var _multiplication2 = _interopRequireDefault(_multiplication);

var _division = require('./operations/division');

var _division2 = _interopRequireDefault(_division);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var add = exports.add = _addition2.default;
var subt = exports.subt = _subtraction2.default;
var mult = exports.mult = _multiplication2.default;
var div = exports.div = _division2.default;