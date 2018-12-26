export const global = {
  state: {
    test: '测试全局State',
  },
  reducers: {
    updateState: (state, payload) => ({ ...state, ...payload }),
  },
  effects: {},
};
