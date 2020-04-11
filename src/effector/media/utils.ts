import * as R from 'ramda';

export const handleMediaChange = (handler: (match: boolean) => void) =>
  R.compose<MediaQueryList | MediaQueryListEvent, boolean, void>(handler, R.prop('matches'));

export function watchMediaChange(
  mediaQuery: string,
  onChange: (mql: MediaQueryList | MediaQueryListEvent) => any,
  fireOnInit = true,
) {
  const mql = window.matchMedia(mediaQuery);
  if (fireOnInit) {
    onChange(mql);
  }
  mql.addEventListener('change', onChange);

  return () => mql.removeEventListener('change', onChange);
}
