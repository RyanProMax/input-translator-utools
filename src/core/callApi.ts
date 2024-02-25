import axios, { AxiosRequestConfig } from 'axios';

export default async ({
  domain, api, needRaw = false, headers, ...config
}: AxiosRequestConfig & {
  domain?: string
  api?: string
  needRaw?: boolean
}) => {
  const result = await axios({
    headers: {
      Accept: 'application/json',
      ['Content-Type']: config.method?.toLowerCase() === 'post'
        ? 'application/x-www-form-urlencoded'
        : 'application/json',
      ...headers,
    },
    url: `${domain}${api}`,
    method: 'get',
    ...config,
  });
  return needRaw ? result : result.data;
};
