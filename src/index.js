import React from "react";
import ReactDOM from "react-dom";
import './styles/index.scss';
import reducer from "./reducer/reducer.js";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from 'redux';
import {throttle} from "lodash";
import thunk from 'redux-thunk';
import {createAPI} from "./api.js";
// import {Operation} from "./reducer/notes/notes.js";
import {loadState, saveState} from "./reducer/local-storage.js";
import App from "./components/App.js"


const persistedState = loadState();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true, traceLimit: 25}) || compose;

const store = createStore(
  reducer,
  persistedState,
  // composeEnhancers(
  // )
);

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

// store.dispatch(Operation.loadNotes())

ReactDOM.render(
  <Provider store={store} basename={process.env.PUBLIC_URL}>
    <App/>
  </Provider>,
  document.querySelector(`#root`)
);

