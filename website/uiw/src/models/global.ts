import { createModel } from '@rematch/core';
import { RootModel } from '../store';

export interface GlobalState {
  token?: string;
}

export default createModel<RootModel>()({
  state: {} as GlobalState,
  reducers: {
    update: (state, payload: GlobalState) => ({
      ...state,
      ...payload,
    }),
  },
  effects: (dispatch) => ({
    async verify(_, state) {},
  }),
});
