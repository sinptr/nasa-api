import { createStore } from 'effector';
import { isMobile } from '../../utils';

export const $isOpen = createStore(!isMobile());
