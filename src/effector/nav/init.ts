import * as R from 'ramda';
import { guard, sample } from 'effector';
import { $isOpen } from './state';
import { closeNav, openNav, setNavState, toggleNav } from './events';
import { extractPayload } from '../../utils';
import { $mobile } from '../media/state';

$isOpen.on(setNavState, extractPayload);

// guard for toggling nav for non mobile media
guard({
  source: sample($isOpen, closeNav, R.F),
  filter: $mobile,
  target: setNavState,
});
guard({
  source: sample($isOpen, toggleNav, R.not),
  filter: $mobile,
  target: setNavState,
});
guard({
  source: sample($isOpen, openNav, R.T),
  filter: $mobile,
  target: setNavState,
});
//

// if $mobile media changed then if it's not mobile then open nav else close
sample({
  source: $mobile,
  fn: R.not,
  target: $isOpen,
});
