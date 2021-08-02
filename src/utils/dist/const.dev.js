"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.packs = exports.tasks = exports.seasons = exports.collectibles = exports.CARDS_IN_PACK = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CARDS_IN_PACK = 1;
exports.CARDS_IN_PACK = CARDS_IN_PACK;
var collectibles = [{
  id: 0,
  name: "Dummy",
  src: "../img/Giraf.jpeg",
  isCollected: false,
  rarity: "blue",
  monthNumber: 9,
  year: 2020
}, {
  id: 1,
  name: "\u041F\u0438\u043D\u0433\u0432\u0438\u043D",
  src: "../img/Emperor_penguin.png",
  isCollected: false,
  rarity: "blue",
  monthNumber: 9,
  year: 2020
}, {
  id: 2,
  name: "\u0411\u0443\u0440\u044B\u0439 \u041C\u0435\u0434\u0432\u0435\u0434\u044C",
  src: "../img/buryj-medved.jpg",
  isCollected: false,
  rarity: "purple",
  monthNumber: 9,
  year: 2020
}, {
  id: 3,
  name: "\u0418\u0432\u043E\u043B\u0433\u0430",
  src: "../img/ivolga.jpg",
  isCollected: false,
  rarity: "blue",
  monthNumber: 9,
  year: 2020
}, {
  id: 4,
  name: "\u041B\u0438\u0441\u0430",
  src: "../img/lisa.jpg",
  isCollected: false,
  rarity: "blue",
  monthNumber: 9,
  year: 2020
}, {
  id: 5,
  name: "\u0421\u043B\u043E\u043D",
  src: "../img/slon.jpg",
  isCollected: false,
  rarity: "purple",
  isGoldBorder: true,
  monthNumber: 9,
  year: 2020
}, {
  id: 6,
  name: "\u0412\u043E\u0440\u043E\u0431\u0435\u0439",
  src: "../img/vorobey.jpg",
  isCollected: true,
  rarity: "blue",
  text: "\u041C\u0438\u043B\u0430\u044F \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0430\u044F \u043F\u0442\u0438\u0447\u043A\u0430. \u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0430\u044E\u0442\u0441\u044F \u0441\u0442\u0430\u0439\u043A\u0430\u043C\u0438 \u043F\u043E \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043E\u0441\u043E\u0431\u0435\u0439. \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u043C \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u043C \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0442 \u043D\u0435\u043E\u0431\u044B\u043A\u043D\u043E\u0432\u0435\u043D\u043D\u043E\u0439 \u0432\u0435\u0440\u0442\u043A\u043E\u0441\u0442\u044C\u044E \u0438 \u044E\u0440\u043A\u043E\u0441\u0442\u044C\u044E",
  monthNumber: 9,
  year: 2020
}, {
  id: 7,
  name: "\u0418\u0437\u0443\u043C\u0440\u0443\u0434\u043D\u044B\u0439 \u043B\u0435\u0441",
  src: "../img/green-les.jpg",
  isCollected: false,
  rarity: "orange",
  monthNumber: 9,
  year: 2020
}, {
  id: 8,
  name: "\u041B\u0430\u0432\u0430\u043D\u0434\u0430",
  src: "../img/lavanda.jpg",
  isCollected: false,
  rarity: "orange",
  monthNumber: 9,
  year: 2020
}, {
  id: 9,
  name: "\u041F\u043E\u043B\u044F\u0440\u043D\u043E\u0435 \u0441\u0438\u044F\u043D\u0438\u0435",
  src: "../img/arctic_light.jpg",
  isCollected: false,
  rarity: "orange",
  monthNumber: 9,
  year: 2020
}, {
  id: 10,
  name: "\u0410\u043B\u044C\u0431\u0430\u0442\u0440\u043E\u0441",
  src: "../img/Albatros.jpg",
  isCollected: false,
  rarity: "purple",
  monthNumber: 9,
  year: 2020
}, {
  id: 11,
  name: "\u0416\u0438\u0440\u0430\u0444",
  src: "../img/Giraf.jpeg",
  isCollected: false,
  rarity: "blue",
  monthNumber: 9,
  year: 2020
}, // November
{
  id: 12,
  name: "\u0410\u043B\u044C\u0431\u0430\u0442\u0440\u043E\u0441",
  src: "../img/sokol.jpg",
  isCollected: false,
  rarity: "purple",
  monthNumber: 10,
  year: 2020
}];
exports.collectibles = collectibles;
var seasons = [{
  monthName: "\u041E\u043A\u0442\u044F\u0431\u0440\u044C",
  id: "october2020",
  monthNumber: 9,
  year: 2020,
  isActive: false,
  icon: "../img/autumn.svg",
  iconName: "Убаюкивающий листопад",
  iconText: "\u041D\u0430\u0441\u043B\u0430\u0434\u0438\u0442\u0435\u0441\u044C \u043E\u0441\u0435\u043D\u043D\u0438\u043C \u0441\u043F\u043E\u043A\u043E\u0439\u0441\u0442\u0432\u0438\u0435\u043C \u0438 \u0443\u043C\u0438\u0440\u043E\u0442\u0432\u043E\u0440\u0451\u043D\u043D\u043E\u0441\u0442\u044C\u044E"
}, {
  monthName: "\u041D\u043E\u044F\u0431\u0440\u044C",
  id: "november2020",
  monthNumber: 10,
  year: 2020,
  isActive: false,
  icon: "../img/november.svg",
  iconText: ""
}, {
  monthName: "\u0414\u0435\u043A\u0430\u0431\u0440\u044C",
  id: "december2020",
  monthNumber: 11,
  year: 2020,
  isActive: false,
  icon: "../img/december.svg",
  iconText: ""
}];
exports.seasons = seasons;
var tasks = [{
  name: 'Медитация',
  reward: "cardPack",
  image: "../img/card-back-playing-koi.png",
  amount: 1,
  id: 0
}, {
  name: 'Тренировка реальности',
  reward: "cardPack",
  image: "../img/card-back-playing-koi.png",
  amount: 1,
  id: 1
}, {
  name: 'Воздух осени',
  reward: "cardPack",
  image: "../img/card-back-playing-koi.png",
  amount: 1,
  id: 1
}];
exports.tasks = tasks;
var packs = [{
  name: "October 2020 cards pack",
  monthNumber: 9,
  year: 2020,
  image: "../img/card-back-playing-koi.png",
  amount: 100
}, {
  name: "gold",
  monthNumber: (0, _moment["default"])().month(),
  year: (0, _moment["default"])().year(),
  image: "../img/card-back-golden.png",
  amount: 2
}];
exports.packs = packs;