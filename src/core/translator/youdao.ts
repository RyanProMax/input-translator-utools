import CryptoJS from 'crypto-js';
import { v4 } from 'uuid';

import { AbstractTranslator, Singleton } from './base';
import callApi from '@/core/callApi';
import { PlatForm } from '@/constant';
import { getTranslatorConfig } from './utils';

export default class YouDao extends Singleton implements AbstractTranslator {

  private truncate(q: string) {
    const len = q.length;
    if (len <= 20) return q;
    return q.substring(0, 10) + len + q.substring(len - 10, len);
  }

  async translator({
    query, from = 'auto', to = 'en'
  }: Translator.CommonRequest) {
    const { app_id, app_key } = getTranslatorConfig(PlatForm.YouDao);
    if (!app_id || !app_key) {
      throw new Error('请先设置应用id和key');
    }

    const salt = v4();
    const curtime = String(Math.round(Date.now() / 1000));
    const str1 = `${app_id}${this.truncate(query)}${salt}${curtime}${app_key}`;
    const sign = CryptoJS.SHA256(str1).toString(CryptoJS.enc.Hex);

    const params: YouDao.TextTranslatorRequest = {
      q: query,
      appKey: app_id,
      salt,
      from,
      to,
      sign,
      signType: 'v3',
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
    } as Translator.CommonResponse;
  }
}

export const youDaoInstance = YouDao.getInstance<YouDao>();
