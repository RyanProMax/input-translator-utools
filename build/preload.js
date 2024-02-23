window.exports = {
  "open_ai_translator": {
    mode: "none",
    args: {
      // 进入插件应用时调用
      enter: (action) => {
        console.log('preload...', action);
        window.utools.hideMainWindow()
        window.utools.outPlugin()
        window.utools.showNotification(action);
      }
    }
  }
}
