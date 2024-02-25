import { AbstractTranslator, Singleton } from './base';

export default class YouDao extends Singleton implements AbstractTranslator {

  async translator(arg0: Translator.CommonRequest) {
    return arg0 as Promise<Translator.CommonResponse>;
  };
}

export const youDaoInstance = YouDao.getInstance<YouDao>();
