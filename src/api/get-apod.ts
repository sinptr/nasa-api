import { api } from './api';
import { Apod } from './types';

export async function getApod(): Promise<Apod> {
  const { data } = await api.get('planetary/apod');
  return data;
}
