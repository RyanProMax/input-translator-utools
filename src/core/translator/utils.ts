import { get } from 'lodash-es';

import { PlatForm } from '@/constant';

export const getTranslatorConfig = (platform: PlatForm) => get(
  JSON.parse(window.utools.dbStorage.getItem('translator') || '{}'),
  platform,
  {}
);

export const updateTranslatorConfig = (platform: PlatForm, value: unknown) => {
  const store = JSON.parse(window.utools.dbStorage.getItem('translator') || '{}');
  store[platform] = value;
  window.utools.dbStorage.setItem('translator', JSON.stringify(store));
};
