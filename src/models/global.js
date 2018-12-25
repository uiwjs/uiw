import request from '../utils/request';

export const global = {
  state: {
    test: '测试全局State',
  },
  reducers: {
    updateState: (state, payload) => ({ ...state, ...payload }),
  },
  effects: {
    // 验证登录
    async verify() {
      const data = await request('/api/user/verify');
      const props = { isAuthenticated: true };
      if (data) {
        props.userData = data;
        props.token = data.token;
      }
      this.updateState({ ...props });
    },
  },
};
