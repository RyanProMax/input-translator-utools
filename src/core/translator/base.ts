export abstract class AbstractTranslator {
  abstract translator(arg0: Translator.CommonRequest): Promise<Translator.CommonResponse>;
}

export class Singleton {
  static instance: Singleton;

  static getInstance<T extends Singleton>(): T {
    if (!this.instance) {
      this.instance = new this();
    }
    return this.instance as T;
  }
}
