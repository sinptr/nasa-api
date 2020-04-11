import { createStore } from 'effector';
import { $desktop } from '../media/state';

export const $isOpen = createStore($desktop.getState());
