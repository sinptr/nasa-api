import { createEvent } from 'effector';

export const openNav = createEvent<any>();
export const closeNav = createEvent<any>();
export const toggleNav = createEvent<any>();
export const setNavState = createEvent<boolean>();
