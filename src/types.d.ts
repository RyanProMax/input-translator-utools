/// <reference types="utools-api-types" />

declare namespace _UTools {
  type PreloadExports = Record<string, _UTools.IExports>;

  interface IExports {
    mode: 'none';
    args: IExportsArgs;
  }

  interface IExportsArgs {
    enter?: Parameters<UToolsApi['onPluginEnter']>[0];
    search?: unknown;
    select?: unknown;
  }
}

declare var exports: _UTools.PreloadExports;
