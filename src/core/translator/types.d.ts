declare namespace Translator {
  interface CommonRequest {
    query: string;
    from?: string;
    to?: string;
  }

  interface CommonResponse {
    from: string;
    to: string;
    translation: string[];
  }
}

declare namespace YouDao {
  // https://ai.youdao.com/DOCSIRMA/html/trans/api/wbfy/index.html
  interface TextTranslatorRequest {
    q: string; // 待翻译文本，必须是UTF-8编码
    from: string;	// 源语言 (可设置为auto)
    to: string; // 目标语言
    appKey: string; // app id
    salt: string; // 随机字符串，可使用UUID进行生成
    sign: string; // 签名，sha256 (应用ID + input + salt + curtime + 应用密钥)
    signType: string; // 签名类型，v3
    curtime: string; // 当前UTC时间戳 (秒)
    ext?: string; // 翻译结果音频格式，支持mp3
    voice?: string; // 翻译结果发音选择，0-女声，1-男声。默认为女声
    strict?: boolean; // 是否严格按照指定from和to进行翻译，默认为false，自动中英互译
    vocabId?: string; // 用户指定的词典 out_id，支持英中互译
    domain?: string;	// 领域化翻译。默认为：general
    rejectFallback?: boolean; // 拒绝领域化翻译降级 - 当领域化翻译失败时改为通用翻译	false	true或false，默认为：false。仅在控制台开通领域化翻译的情况生效。
  }

  interface TextTranslatorResponse {
    errorCode: string; // 错误返回码
    requestId?: string;
    isWord?: boolean;
    query?: string; // 源语言，查询正确时，一定存在
    translation?: string[]; // 翻译结果，查询正确时，一定存在
    basic?: string; // 词义，基本词典，查词时才有
    web?: string[]; // 词义，网络释义，该结果不一定存在
    l: string; // 源语言和目标语言，一定存在
    dict?: string; // 词典deeplink，查询语种为支持语言时，存在
    webdict?: string; // webdeeplink，查询语种为支持语言时，存在
    tSpeakUrl?: string; // 翻译结果发音地址，翻译成功一定存在，需要应用绑定语音合成服务才能正常播放，否则返回110错误码
    speakUrl?: string; // 源语言发音地址，同上
    returnPhrase?: string[]; // 单词校验后的结果，主要校验字母大小写、单词前含符号、中文简繁体
  }
}
