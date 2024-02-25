import { franc } from 'franc-min';
import { youDaoInstance } from './core/translator/youdao';
import { FrancLanguage } from './constant';

window.exports = {
  translate_and_paste: {
    mode: 'none',
    args: {
      enter: async (action) => {
        try {
          const { type, payload } = action;
          if (type === 'over' && payload) {
            const language = franc(payload);
            const { translation } = await youDaoInstance.translator({
              query: payload,
              to: language === FrancLanguage.CN ? 'en' : 'zh-CHS',
            });
            window.utools.hideMainWindowPasteText(translation.join('\r\n'));
          }
        } catch (e) {
          window.utools.showNotification(`Error: ${(e as Error)?.message}`);
        }
      }
    }
  },
  translate_only: {
    mode: 'none',
    args: {
      enter: async (action) => {
        try {
          const { type, payload } = action;
          if (type === 'over' && payload) {
            // ...
          }
        } catch (e) {
          window.utools.showNotification((e as Error)?.message);
        }
      }
    }
  }
}
