export default {
  storeTransactions(...args) {
    import('./storeTransactions').then(({default: fn}) => fn.call(...args));
  },
  storeAccessToken(...args) {
    import('./storeAccessToken').then(({default: fn}) => fn.call(...args));
  },
};
