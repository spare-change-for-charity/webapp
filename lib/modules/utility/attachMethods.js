const attachMethods = (collection, methods) => {
  Object.keys(methods).forEach((method) => {
    if (collection[method]) {
      throw new Error(`${method} already exists on ${collection}`);
    }
    collection[method] = methods[method]; // eslint-disable-line no-param-reassign
  });
};

export default attachMethods;
