(()=>{"use strict";var t={928:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.translate=void 0,e.translate=t=>`translate: ${t}`}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,o),a.exports}(()=>{const t=o(928);window.exports={open_ai_translator:{mode:"none",args:{enter:e=>{try{const{type:o,payload:n}=e;if("over"===o&&n){const e=(0,t.translate)(n);window.utools.hideMainWindowPasteText(e),setTimeout((()=>{window.utools.hideMainWindowPasteText(`${e} + 1`)}),1e3)}}catch(t){window.utools.showNotification(t?.message)}}}}}})()})();