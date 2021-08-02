import NameSpace from './../name-space.js';

export const getActiveCard = (state) => state[NameSpace.CONDITION].activeCard;
export const getSeasons = (state) => state[NameSpace.CONDITION].seasons;
export const getActiveMonthNumber = (state) => state[NameSpace.CONDITION].activeMonthNumber;
export const getActiveYearNumber = (state) => state[NameSpace.CONDITION].activeYearNumber;

