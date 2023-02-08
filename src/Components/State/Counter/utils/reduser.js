import { initialState } from '../Counter';
import { types } from './types';

export const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.INCREMENT:
      return { ...state, value: state.value + state.step };
    case types.DECREMENT:
      return { ...state, value: state.value - state.step };
    case types.SET_STEP:
      return { ...state, step: actions.payload };
    default:
      return state;
  }
};
