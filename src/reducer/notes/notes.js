import {extend} from "../../utils/common.js";
import {notes} from "../../utils/const.js";

export const initialState = {
  notes: notes,
  hasInitialNotesSet: false,
  filteredNotes: null,
  activeNote: null,
  newNoteId: null,
  showMoreNotes: 10,
  notesToShow: 10,
  editorState: null,
};

export const ActionType = {
  SET_NOTES: `SET_NOTES`,
  DELETE_NOTE: `DELETE_NOTE`,
  DELETE_NOTES: `DELETE_NOTES`,
  SET_NEW_NOTE_ID: `SET_NEW_NOTE_ID`,
  SET_NOTES_NUMBER_TO_SHOW: `SET_NOTES_NUMBER_TO_SHOW`,
  SET_FILTERED_NOTES: `SET_FILTERED_NOTES`,
  SET_NOTE_TEXT: `SET_NOTE_TEXT`,
  SET_ACTIVE_NOTE: `SET_ACTIVE_NOTE`,
  SET_EDITOR_STATE: `SET_EDITOR_STATE`,
  CHANGE_HAS_INITIAL_NOTES_SET_FLAG: `CHANGE_HAS_INITIAL_NOTES_SET_FLAG`,
}

export const ActionCreator = {
  setNotes: (notes) => ({
    type: ActionType.SET_NOTES,
    payload: notes,
  }),

  deleteNote: (notes) => ({
    type: ActionType.DELETE_NOTE,
    payload: notes,
  }),

  deleteNotes: (notes) => ({
    type: ActionType.DELETE_NOTES,
    payload: notes,
  }),

  setNewNoteId: (id) => ({
    type: ActionType.SET_NEW_NOTE_ID,
    payload: id,
  }),

  setActiveNote: (id) => ({
    type: ActionType.SET_ACTIVE_NOTE,
    payload: id,
  }),

  setNotesNumberToShow: (number) => ({
    type: ActionType.SET_NOTES_NUMBER_TO_SHOW,
    payload: number,
  }),

  setFilteredNotes: (notes) => ({
    type: ActionType.SET_FILTERED_NOTES,
    payload: notes,
  }),

  setNoteText: (payload) => ({
    type: ActionType.SET_NOTE_TEXT,
    payload: {note: payload.activeNote, text: payload.editorText},
  }),

  setEditorState: (editorState) => ({
    type: ActionType.SET_EDITOR_STATE,
    payload: editorState,
  }),

  changeHasInitialNotesSetFlag: () => ({
    type: ActionType.CHANGE_HAS_INITIAL_NOTES_SET_FLAG,
  }),

  changeErrorFlag: () => ({
    type: ActionType.CHANGE_ERROR_FLAG,
  }),

  setErrorMessage: (error) => ({
    type: ActionType.SET_ERROR_MESSAGE,
    payload: error,
  }),
};

export const Operation = {
  loadNotes: () => (dispatch, getState, api) => {
    return api.get(`todos`)
      .then((response) => {
        dispatch(ActionCreator.setNotes(response.data));
      })
      .catch(() => {
      });
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.SET_NOTES:
      return extend(state, {notes: [...state.notes, action.payload]});

    case ActionType.DELETE_NOTE:
      const id = action.payload.id
      return extend(state, {
        notes: state.notes.filter((note) => note.id !== id)
      })

    case ActionType.DELETE_NOTES:
      const emptyNotes = action.payload
      return extend(state, {
        notes: state.notes.filter(note => !emptyNotes.includes(note))
      })

    case ActionType.SET_NEW_NOTE_ID:
      return extend(state, {newNoteId: action.payload});

    case ActionType.SET_NOTES_NUMBER_TO_SHOW:
      return extend(state, {notesToShow: state.notesToShow + action.payload});

    case ActionType.SET_FILTERED_NOTES:
      return extend(state, {filteredNotes: action.payload})

    case ActionType.SET_ACTIVE_NOTE:
      return extend(state, {
        // activeNote: state.notes.find(note => note.id === action.payload)
        activeNote: action.payload,
      })

    case ActionType.CHANGE_HAS_INITIAL_NOTES_SET_FLAG:
      return extend(state, {hasInitialNotesSet: !state.hasInitialNotesSet})

    case ActionType.SET_NOTE_TEXT:
      return extend(state, {
        notes: state.notes.map((note) => {
          if (note.id === action.payload.note.id) {
            return extend(note, {
              text: action.payload.text,
            })
          }
          return note;
        }),
      });

    case ActionType.CHANGE_ERROR_FLAG:
      return Object.assign({}, state, {
        isError: !state.isError,
      });
    case ActionType.SET_ERROR_MESSAGE:
      return Object.assign({}, state, {
        errorMessage: action.payload,
      });
    case ActionType.SET_ACTIVE_SEASON:
      return Object.assign({}, state, {
        seasons: state.seasons.map((season) => {
          if (season.id === action.payload.id) {
            return Object.assign({}, season, {
              isActive: true,
            })
          }
          return season;
        }),
      });
    case ActionType.RESET_ACTIVE_SEASON:
      return Object.assign({}, state, {
        seasons: state.seasons.map((season) => {
          if (season.isActive) {
            return Object.assign({}, season, {
              isActive: false,
            })
          }
          return season;
        }),
      });
    default:
      return state;
  }
};
