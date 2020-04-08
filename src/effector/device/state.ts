import { createStore } from 'effector';
import { isMobile } from '../../utils';

export const $isMobile = createStore<boolean>(isMobile());
