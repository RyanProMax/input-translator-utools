import { youDaoInstance } from './core/translator/youdao';

window.exports = {
  translate_and_paste: {
    mode: 'none',
    args: {
      enter: async (action) => {
        try {
          const { type, payload } = action;
          if (type === 'over' && payload) {
            const { translation } = await youDaoInstance.translator({ query: payload });
            window.utools.hideMainWindowPasteText(translation.join('\r\n'));
          }
        } catch (e) {
          window.utools.showNotification((e as Error)?.message);
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
