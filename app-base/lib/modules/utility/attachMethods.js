const attachMethods = (collection, methods) => {
  Object.keys(methods).forEach(method => {
    if (collection[method]) {
      throw new Error(`${method} already exists on ${collection}`);
    }
    collection[method] = methods[method];
  });
};

export default attachMethods;
