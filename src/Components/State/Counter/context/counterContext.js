import { createContext, useContext } from 'react';

export const CounterContext = createContext();

export const useCounterContext = () => useContext(CounterContext);
