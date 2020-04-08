import * as R from 'ramda';
import { guard, sample } from 'effector';
import { $isOpen } from './state';
import { closeNav, setNavState, toggleNav } from './events';
import { $isMobile } from '../device/state';
import { extractPayload } from '../../utils';

$isOpen.on(setNavState, extractPayload);

guard({ source: sample($isOpen, closeNav, R.F), filter: $isMobile, target: setNavState });
guard({ source: sample($isOpen, toggleNav, R.not), filter: $isMobile, target: setNavState });
guard({ source: sample($isOpen, closeNav, R.T), filter: $isMobile, target: setNavState });

sample({
  source: $isMobile,
  fn: R.not,
  target: $isOpen,
});
