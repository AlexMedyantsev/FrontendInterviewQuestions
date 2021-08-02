"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.ActionCreator = exports.ActionType = exports.initialState = void 0;

var _common = require("../../utils/common.js");

var _const = require("../../utils/const.js");

var initialState = {
  activeCard: null,
  activeMonthNumber: null,
  seasons: _const.seasons,
  activeSeasonTab: null,
  activeYear: null
};
exports.initialState = initialState;
var ActionType = {
  SET_ACTIVE_CARD: "SET_ACTIVE_CARD",
  RESET_ACTIVE_CARD: "RESET_ACTIVE_CARD",
  SET_ACTIVE_MONTH_NUMBER: "SET_ACTIVE_MONTH_NUMBER",
  SET_ACTIVE_YEAR: "SET_ACTIVE_YEAR",
  SET_ACTIVE_SEASON: "SET_ACTIVE_SEASON",
  RESET_ACTIVE_SEASON: "RESET_ACTIVE_SEASON",
  SET_ACTIVE_SEASON_TAB: "SET_ACTIVE_SEASON_TAB"
};
exports.ActionType = ActionType;
var ActionCreator = {
  setActiveCard: function setActiveCard(card) {
    return {
      type: ActionType.SET_ACTIVE_CARD,
      payload: card
    };
  },
  resetActiveCard: function resetActiveCard() {
    return {
      type: ActionType.RESET_ACTIVE_CARD
    };
  },
  setActiveSeason: function setActiveSeason(month) {
    return {
      type: ActionType.SET_ACTIVE_SEASON,
      payload: month
    };
  },
  resetActiveSeason: function resetActiveSeason() {
    return {
      type: ActionType.RESET_ACTIVE_SEASON
    };
  },
  setActiveYear: function setActiveYear(month) {
    return {
      type: ActionType.SET_ACTIVE_YEAR,
      payload: month
    };
  },
  setActiveSeasonTab: function setActiveSeasonTab(month) {
    return {
      type: ActionType.SET_ACTIVE_SEASON_TAB,
      payload: month
    };
  }
};
exports.ActionCreator = ActionCreator;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ActionType.SET_ACTIVE_CARD:
      return Object.assign({}, state, {
        activeCard: action.payload
      });

    case ActionType.SET_ACTIVE_MONTH_NUMBER:
      return Object.assign({}, state, {
        activeMonthNumber: action.payload
      });

    case ActionType.SET_ACTIVE_YEAR:
      return Object.assign({}, state, {
        activeYear: action.payload
      });

    case ActionType.SET_ACTIVE_SEASON_TAB:
      return Object.assign({}, state, {
        activeSeasonTab: action.payload
      });

    case ActionType.SET_ACTIVE_SEASON:
      return Object.assign({}, state, {
        seasons: state.seasons.map(function (season) {
          if (season.id === action.payload.id) {
            return Object.assign({}, season, {
              isActive: true
            });
          }

          return season;
        })
      });

    case ActionType.RESET_ACTIVE_SEASON:
      return Object.assign({}, state, {
        seasons: state.seasons.map(function (season) {
          if (season.isActive) {
            return Object.assign({}, season, {
              isActive: false
            });
          }

          return season;
        })
      });

    case ActionType.RESET_ACTIVE_CARD:
      return Object.assign({}, state, {
        activeCard: null
      });

    default:
      return state;
  }
};

exports.reducer = reducer;