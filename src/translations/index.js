import common_ua from './ua/common.json';
import common_en from './en/common.json';

import i18next from 'i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'ua',
  resources: {
    ua: {
      common: common_ua,
    },
    en: {
      common: common_en,
    },
  },
});

export default i18next;
