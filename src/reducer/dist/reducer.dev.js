"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pick = require("./pick/pick.js");

var _condition = require("./condition/condition.js");

var _money = require("./money/money.js");

var _nameSpace = _interopRequireDefault(require("./name-space.js"));

var _redux = require("redux");

var _combineReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _redux.combineReducers)((_combineReducers = {}, _defineProperty(_combineReducers, _nameSpace["default"].PICK, _pick.reducer), _defineProperty(_combineReducers, _nameSpace["default"].CONDITION, _condition.reducer), _defineProperty(_combineReducers, _nameSpace["default"].MONEY, _money.reducer), _combineReducers));

exports["default"] = _default;