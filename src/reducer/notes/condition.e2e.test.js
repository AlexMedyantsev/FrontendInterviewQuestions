import {reducer, ActionType} from "./condition.js";
import {GENRES, SHOWING_MOVIES_COUNT_ON_START, MOVIES_ADDED_ON_BUTTON_CLICK} from "../../utils/consts.js";


const initialState = {
  currentGenre: GENRES.ALL,
  countMoviesShowed: SHOWING_MOVIES_COUNT_ON_START,
  isError: false,
  errorMessage: null,
  activeMovie: null,
};

const moviesArray = [
  {
    image: `a`,
    posterSrc: `a`,
    bgSrc: `a`,
    title: `Name`,
    genre: `Genre`,
    year: 2014,
    score: 8.9,
    level: `level`,
    movieLink: `link`,
    previewLink: `preview-link`,
    scoresCount: 220,
    description: `description`,
    director: `director`,
    starring: [`starring`, `next`],
    runTime: `01h30m`,
    link: `movie-page.html`,
    id: 1,
    backgroundColor: `background_color`,
    isFavorite: true
  },
  {
    image: `a`,
    posterSrc: `a`,
    bgSrc: `a`,
    title: `Name`,
    genre: `Genre`,
    year: 2014,
    score: 8.9,
    level: `level`,
    movieLink: `link`,
    previewLink: `preview-link`,
    scoresCount: 220,
    description: `description`,
    director: `director`,
    starring: [`starring`, `next`],
    runTime: `01h30m`,
    link: `movie-page.html`,
    id: 2,
    backgroundColor: `background_color`,
    isFavorite: true
  }
];

describe(`Check condition reducer`, () => {
  it(`it should return default initialState when passed nothing`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it(`it should change genre`, () => {
    expect(reducer({}, {type: ActionType.CHANGE_GENRE, payload: `Action`})).toEqual({currentGenre: `Action`});
  });

  it(`it should set active Movie`, () => {
    expect(reducer({}, {type: ActionType.SET_ACTIVE_MOVIE, payload: moviesArray[0]})).toEqual({activeMovie: moviesArray[0]});
  });

  it(`it should set error Message`, () => {
    expect(reducer({}, {type: ActionType.SET_ERROR_MESSAGE, payload: moviesArray[0].title})).toEqual({errorMessage: moviesArray[0].title});
  });

  it(`it should change isError state`, () => {
    expect(reducer({}, {type: ActionType.CHANGE_ERROR_FLAG})).toEqual({isError: !initialState.isError});
  });

  it(`it should incriment countMoviesShowed`, () => {
    expect(reducer({countMoviesShowed: SHOWING_MOVIES_COUNT_ON_START}, {type: ActionType.INCREMENT_COUNT_MOVIES_SHOW})).toEqual({countMoviesShowed: SHOWING_MOVIES_COUNT_ON_START + MOVIES_ADDED_ON_BUTTON_CLICK});
  });

  it(`it should reset movies to default value`, () => {
    expect(reducer({countMoviesShowed: 16}, {type: ActionType.RESET_COUNT_MOVIES_SHOW})).toEqual({countMoviesShowed: SHOWING_MOVIES_COUNT_ON_START});
  });
});
