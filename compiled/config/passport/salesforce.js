'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _passportForcedotcom = require('passport-forcedotcom');

var _secrets = require('../secrets');

var _unsupportedMessage = require('../../db/unsupportedMessage');

var _unsupportedMessage2 = _interopRequireDefault(_unsupportedMessage);

var _db = require('../../db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (passport) {
  if (!_db.passport || !_db.passport.salesforce || !_typeof(_db.passport.salesforce) === 'function') {
    console.warn((0, _unsupportedMessage2.default)('passport-forcedotcom'));
    return;
  }

  passport.use(new _passportForcedotcom.Strategy({
    clientID: _secrets.salesforce.clientId,
    clientSecret: _secrets.salesforce.clientSecret,
    scope: ['full', 'refresh_token'],
    callbackURL: _secrets.salesforce.redirectUri,
    authorizationURL: _secrets.salesforce.authorizationURL,
    tokenURL: _secrets.salesforce.tokenURL
  }, _db.passport.salesforce));
};