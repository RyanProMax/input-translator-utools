import CryptoJS from 'crypto-js';
import { v4 } from 'uuid';

import { YouDaoSecret } from '../../secret';
import { AbstractTranslator, Singleton } from './base';
import callApi from '../callApi';

export default class YouDao extends Singleton implements AbstractTranslator {
  app_id = YouDaoSecret.app_id;
  app_key = YouDaoSecret.app_key;

  private truncate(q: string) {
    const len = q.length;
    if (len <= 20) return q;
    return q.substring(0, 10) + len + q.substring(len - 10, len);
  }

  async translator({
    query, from = 'auto', to = 'en'
  }: Translator.CommonRequest) {
    const salt = v4();
    const curtime = String(Math.round(Date.now() / 1000));
    const str1 = `${this.app_id}${this.truncate(query)}${salt}${curtime}${this.app_key}`;
    const sign = CryptoJS.SHA256(str1).toString(CryptoJS.enc.Hex);

    const params: YouDao.TextTranslatorRequest = {
      q: query,
      appKey: this.app_id,
      salt,
      from,
      to,
      sign,
      signType: "v3",
      curtime,
    };

    const response = await callApi({
      method: 'post',
      domain: 'https://openapi.youdao.com',
      api: '/api',
      data: params,
    }) as YouDao.TextTranslatorResponse;

    console.log('[youdao] response', response);
    const { errorCode, translation } = response;
    if (errorCode !== '0' || !translation?.length) {
      throw new Error('查询失败，请稍后重试');
    }
    return {
      from, to, translation,
    } as Translator.CommonResponse
  };
}

export const youDaoInstance = YouDao.getInstance<YouDao>();
