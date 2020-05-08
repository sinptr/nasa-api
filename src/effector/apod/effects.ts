import { createEffect } from 'effector';
import { getApod } from '../../api';
import { Apod } from '../../api/types';

export const fetchApodFx = createEffect<void, Apod>().use(getApod);
