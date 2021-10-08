import { init, RematchRootState, RematchDispatch, Models } from '@rematch/core';
import global from '../models/global';

export const store = init<RootModel>({
  models: { global },
});

export interface RootModel extends Models<RootModel> {
  global: typeof global;
}

export const { dispatch } = store;
export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
