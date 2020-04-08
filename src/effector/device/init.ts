import { deviceChanged } from './events';
import { extractPayload, isMobile } from '../../utils';
import { $isMobile } from './state';

$isMobile.on(deviceChanged, extractPayload);

let timeout: number;
window.addEventListener('resize', function() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    deviceChanged(isMobile());
  }, 100);
});

$isMobile.watch(console.log);
