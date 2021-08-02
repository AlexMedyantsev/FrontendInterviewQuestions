"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkActiveMonth = exports.calculateDisenchantAmount = exports.calculateGoldPrice = exports.filterCardsByMonthDate = exports.filterCardsByRarity = exports.getCollectedCardsCountByRarity = exports.escPressHandler = exports.returnLinkToRarityGemImage = exports.extend = void 0;

var _momentWithLocalesEs = _interopRequireDefault(require("moment-with-locales-es6"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var extend = function extend(a, b) {
  return Object.assign({}, a, b);
};

exports.extend = extend;

var returnLinkToRarityGemImage = function returnLinkToRarityGemImage(item) {
  switch (item.rarity) {
    case "blue":
      return " collectibles__gem--blue";

    case "purple":
      return " collectibles__gem--purple";

    case "orange":
      return " collectibles__gem--orange";

    case "green":
      return " collectibles__gem--green";

    default:
      return null;
  }
};

exports.returnLinkToRarityGemImage = returnLinkToRarityGemImage;

var escPressHandler = function escPressHandler(evt) {
  if (evt.keyCode === 27) {}
};

exports.escPressHandler = escPressHandler;

var getCollectedCardsCountByRarity = function getCollectedCardsCountByRarity(cards, rarity) {
  var count = 0;
  cards.map(function (card) {
    return card.rarity === rarity && card.isCollected ? count++ : '';
  });
  return count;
};

exports.getCollectedCardsCountByRarity = getCollectedCardsCountByRarity;

var filterCardsByRarity = function filterCardsByRarity(cards, rarity) {
  return cards.filter(function (card) {
    return card.rarity === rarity;
  });
};

exports.filterCardsByRarity = filterCardsByRarity;

var filterCardsByMonthDate = function filterCardsByMonthDate(cards, month, year) {
  return cards.filter(function (card) {
    return card.monthNumber === month && card.year === year && card.isCollected;
  });
};

exports.filterCardsByMonthDate = filterCardsByMonthDate;
var blueGoldCraftCost = 100;
var purpleGoldCraftCost = 200;
var orangeGoldCraftCost = 400;
var blueGoldDisenchantCost = 50;
var purpleGoldDisenchantCost = 100;
var orangeGoldDisenchantCost = 200;

var calculateGoldPrice = function calculateGoldPrice(activeCard) {
  switch (activeCard.rarity) {
    case "blue":
      return blueGoldCraftCost;

    case "purple":
      return purpleGoldCraftCost;

    case "orange":
      return orangeGoldCraftCost;
  }
};

exports.calculateGoldPrice = calculateGoldPrice;

var calculateDisenchantAmount = function calculateDisenchantAmount(activeCard) {
  switch (activeCard.rarity) {
    case "blue":
      return activeCard.isGoldBorder ? blueGoldDisenchantCost * 2 : blueGoldDisenchantCost;

    case "purple":
      return activeCard.isGoldBorder ? purpleGoldDisenchantCost * 2 : purpleGoldDisenchantCost;

    case "orange":
      return activeCard.isGoldBorder ? orangeGoldDisenchantCost * 2 : orangeGoldDisenchantCost;
  }
};

exports.calculateDisenchantAmount = calculateDisenchantAmount;

var checkActiveMonth = function checkActiveMonth() {
  var month = (0, _momentWithLocalesEs["default"])().startOf("month").format('MMMM');
  return month;
};

exports.checkActiveMonth = checkActiveMonth;