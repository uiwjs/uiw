import React from 'react';
import i18n from 'react-i18next-config';
import { i18n as i18nType } from 'i18next';

type InitialState = {
  layout: 'top' | 'left' | 'mix';
  i18n: i18nType;
};

export const initialState: InitialState = {
  layout: 'top',
  i18n,
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
