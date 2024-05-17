import {useState} from 'react';

const jsonifyNonStrings = (state: any) => {
  return typeof state !== "string" ? JSON.stringify(state) : state;
}

export default <T>(storageKey: string, initialState: T) => {

  const storedValue = localStorage.getItem(storageKey);
  const stringInitialState = jsonifyNonStrings(initialState);
  const initializeWithState = storedValue ? storedValue : stringInitialState;
  const [state, setInternalState] = useState(initializeWithState);

  const setState = (newState: T) => {
    const jsonNewState = jsonifyNonStrings(newState);
    localStorage.setItem(storageKey, jsonNewState);
    setInternalState(jsonNewState);
  }

  return [state, setState] as const;
}