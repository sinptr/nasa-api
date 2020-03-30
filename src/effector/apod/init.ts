import { guard } from 'effector';
import { fetchApod } from './events';
import { fetchApodFx } from './effects';
import { extractPayload } from '../../utils/extract-payload';
import { $apod, $apodIsEmpty } from './state';

$apod.on(fetchApodFx.doneData, extractPayload);

// Не выполняем запрос, если данные уже есть
guard(fetchApod, { filter: $apodIsEmpty, target: fetchApodFx });
