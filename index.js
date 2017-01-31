export default (executor, defaultValue, logFn) => {
  try {
    const result = executor();
    if (result === undefined) return defaultValue;
    return result;
  } catch (err) {
    if (typeof logFn === 'function') {
      logFn(err);
    }
    return defaultValue;
  }
};
