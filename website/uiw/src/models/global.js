export const global = {
  state: {
    test: 'test',
  },
  reducers: {
    updateState: (state, payload) => ({ ...state, ...payload }),
  },
  effects: {},
};
