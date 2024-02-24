import { translate } from "./core";

window.exports = {
  "open_ai_translator": {
    mode: "none",
    args: {
      enter: (action) => {
        try {
          // window.utools.showNotification(`enter ${JSON.stringify(action)}`);
          const { type, payload } = action;
          if (type === 'over' && payload) {
            const output = translate(payload);
            window.utools.hideMainWindowPasteText(output);
            setTimeout(() => {
              window.utools.hideMainWindowPasteText(`${output} + 1`);
            }, 1000);
          }
        } catch (e) {
          window.utools.showNotification((e as Error)?.message);
        }
      }
    }
  }
}
