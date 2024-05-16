import {useState, useEffect} from 'react';
import TypedLocalStorage from '../util/TypedLocalStorage';

export default <T>(storageKey: string, initialState: T) => {
  const [state, setInternalState] = useState(initialState);
  const typedLocalStorage = new TypedLocalStorage<T>();

  useEffect(() =>{
    const storedValue = typedLocalStorage.getItem(storageKey);
    if(storedValue) {
      setInternalState(storedValue);
    }
  }, []);

  const setState = (newState: T) => {
    typedLocalStorage.setItem(storageKey, newState);
    setInternalState(newState);
  }

  return [state, setState] as const;
}