import { youDaoInstance } from "../src/core/translator/youdao";

const testTranslator = async () => {
  const input = '测试输入';
  console.log('[translator] input', input);
  const output = await youDaoInstance.translator(input);
  console.log('[translator] output', output);
}

(async () => {
  await testTranslator();
})();
