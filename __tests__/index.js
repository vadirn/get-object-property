import getObjectProperty from '../index';
import { setLogFunction } from '../index';

describe('getObjectProperty', () => {
  const logFn = jest.fn();
  it('returns default value if trying to get property of undefined', () => {
    const foo = {};
    let result = getObjectProperty(() => foo.bar.foo, 'default');
    expect(result).toEqual('default');
    expect(logFn.mock.calls.length).toBe(0);
    setLogFunction(logFn);
    result = getObjectProperty(() => foo.bar.foo, 'default');
    expect(result).toEqual('default');
    expect(logFn.mock.calls.length).toBe(1);
  });
  it('returns default value if property is undefined', () => {
    const foo = {};
    const result = getObjectProperty(() => foo.bar, 'default');
    expect(result).toEqual('default');
    expect(logFn.mock.calls.length).toBe(1);
  });
  it('logs error if property is undefined', () => {
    const foo = {};
    const result = getObjectProperty(() => foo.bar.foo, 'default');
    expect(result).toEqual('default');
    expect(logFn.mock.calls.length).toBe(2);
  });
  it('returns value if property exists', () => {
    const foo = { bar: 'foo' };
    const result = getObjectProperty(() => foo.bar, 'default');
    expect(result).toEqual('foo');
  });
});
