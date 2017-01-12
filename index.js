let log = null;

export const setLogFunction = (logFn) => {
  log = logFn;
};

export default (executor, defaultValue, reportError = true) => {
  try {
    const result = executor();
    if (result === undefined) return defaultValue;
    return result;
  } catch (err) {
    if (reportError && typeof log === 'function') {
      log(err);
    }
    return defaultValue;
  }
};
