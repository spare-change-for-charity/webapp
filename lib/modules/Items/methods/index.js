export default {
  create(...args) {
    import('./create').then(({default: fn}) => fn.call(...args));
  },
};
