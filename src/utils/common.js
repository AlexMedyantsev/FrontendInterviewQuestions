import { useRef, useEffect } from 'react';
import {Note} from "./const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};


export function useFirstRender() {
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return firstRender.current;
}

export function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export function onAddMoreButtonClick(setNotes, setNewNoteId) {
  const creationDate = new Date();
  // Generating ID using current Date
  const id = "id" + Math.random().toString(16).slice(2)
  // Creating Empty Note
  const newNote = new Note(id, creationDate)

  setNotes(newNote)
  setNewNoteId(newNote.id);
}

export function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

export function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}
