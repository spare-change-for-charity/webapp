export default {
  someMethod(...args) {
    import('./someMethod').then(({default: fn}) => fn.call(...args));
  },
};
