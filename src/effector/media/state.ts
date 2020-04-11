import * as R from 'ramda';
import { combine, createStore } from 'effector';

export const $desktop = createStore(false);
export const $mobile = combine([$desktop], R.none(R.identity));
