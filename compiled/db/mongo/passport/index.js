'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.salesforce = exports.local = exports.google = exports.deserializeUser = undefined;

var _deserializeUser = require('./deserializeUser');

var _deserializeUser2 = _interopRequireDefault(_deserializeUser);

var _google = require('./google');

var _google2 = _interopRequireDefault(_google);

var _local = require('./local');

var _local2 = _interopRequireDefault(_local);

var _salesforce = require('./salesforce');

var _salesforce2 = _interopRequireDefault(_salesforce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.deserializeUser = _deserializeUser2.default;
exports.google = _google2.default;
exports.local = _local2.default;
exports.salesforce = _salesforce2.default;
exports.default = {
  deserializeUser: _deserializeUser2.default,
  google: _google2.default,
  local: _local2.default,
  salesforce: _salesforce2.default
};