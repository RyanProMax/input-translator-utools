import { useEffect } from 'react';
import { franc } from 'franc-min';

import { youDaoInstance } from '../../../core/translator/youdao';
import { FrancLanguage } from '../../../constant';

export default () => {
  useEffect(() => {
    window.utools.onPluginEnter(async (action) => {
      try {
        const { code, type, payload } = action;
        switch (code) {
          case 'translate_and_paste': {
            if (type === 'over' && payload) {
              const language = franc(payload);
              const { translation } = await youDaoInstance.translator({
                query: payload,
                to: language === FrancLanguage.CN ? 'en' : 'zh-CHS',
              });
              // window.utools.hideMainWindowPasteText(translation.join('\r\n'));
            }
            return;
          };
          case 'translate_only': {

            return;
          }
          default: return;
        }
      } catch (e) {
        window.utools.showNotification(`Error: ${(e as Error)?.message}`);
      }
    });

    // window.utools.onMainPush((action) => {
    //   window.utools.showNotification(`onMainPush callback: ${JSON.stringify(action)}`);
    //   return [];
    // }, (action) => {
    //   window.utools.showNotification(`onMainPush selectCallback: ${JSON.stringify(action)}`);
    // })
  }, []);

  return (
    <div>Home</div>
  )
}
