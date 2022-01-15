import React from 'react';

type InitialState = {
  layout: 'top' | 'left' | 'mix';
};

export const initialState: InitialState = {
  layout: 'top',
};

export const reducer = (state: InitialState, action: InitialState) => {
  return {
    ...state,
    ...action,
  };
};

export interface Context {
  state: InitialState;
  dispatch: React.Dispatch<InitialState>;
}

export const ThemeContext = React.createContext<Context>({
  state: initialState,
  dispatch: () => null,
});
