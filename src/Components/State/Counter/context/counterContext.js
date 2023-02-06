import { createContext, useContext } from 'react';

const CounterContext = createContext();

export const useCounterContext = () => useContext(CounterContext);
