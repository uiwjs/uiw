import { init } from '@rematch/core';
import * as models from '../models/global';

export const store = init({
  models,
});
