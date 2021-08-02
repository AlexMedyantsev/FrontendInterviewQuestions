"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getActiveYearNumber = exports.getActiveMonthNumber = exports.getSeasons = exports.getActiveCard = void 0;

var _nameSpace = _interopRequireDefault(require("./../name-space.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getActiveCard = function getActiveCard(state) {
  return state[_nameSpace["default"].CONDITION].activeCard;
};

exports.getActiveCard = getActiveCard;

var getSeasons = function getSeasons(state) {
  return state[_nameSpace["default"].CONDITION].seasons;
};

exports.getSeasons = getSeasons;

var getActiveMonthNumber = function getActiveMonthNumber(state) {
  return state[_nameSpace["default"].CONDITION].activeMonthNumber;
};

exports.getActiveMonthNumber = getActiveMonthNumber;

var getActiveYearNumber = function getActiveYearNumber(state) {
  return state[_nameSpace["default"].CONDITION].activeYearNumber;
};

exports.getActiveYearNumber = getActiveYearNumber;