// import { translate } from "./core";

import { youDaoInstance } from "./core/translator/youdao";

window.exports = {
  "open_ai_translator": {
    mode: "none",
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
  }
}
