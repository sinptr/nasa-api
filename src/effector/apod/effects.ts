import { createEffect } from 'effector';
import { Apod, getApod } from '../../api';

export const fetchApodFx = createEffect<void, Apod>().use(getApod);
