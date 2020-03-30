import * as R from 'ramda';
import { createStore } from 'effector';
import { Apod } from '../../api';

export const $apod = createStore<Apod>({} as Apod);
export const $apodIsEmpty = $apod.map(R.isEmpty);
