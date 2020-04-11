import { media } from '../../constants';
import { desktopMediaChanged } from './events';
import { $desktop } from './state';
import { extractPayload } from '../../utils';
import { handleMediaChange, watchMediaChange } from './utils';

$desktop.on(desktopMediaChanged, extractPayload);

const handleDesktopChange = handleMediaChange(desktopMediaChanged);
watchMediaChange(media.desktop, handleDesktopChange);
