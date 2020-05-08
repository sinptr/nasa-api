import { api } from './api';

export type Apod = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  url: string;
  mediaType: string;
  serviceVersion: string;
  title: string;
};

export async function getApod(): Promise<Apod> {
  const { data } = await api.get('planetary/apod');
  return data;
}
