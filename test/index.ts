import { youDaoInstance } from "../src/core/translator/youdao";

const testTranslator = async () => {
  const input = '对专业或者学术有要求的翻译场景，开通方式如下：\r\n' +
    '登录控制台，选择文本翻译服务，勾选下面的领域翻译服务，点击保存即可开通使用。';
  console.log('[translator] input', input);
  const output = await youDaoInstance.translator({
    query: input
  });
  console.log('[translator] output', output);
}

(async () => {
  await testTranslator();
})();
