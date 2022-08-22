import { useLocalStorage } from './index';
import {renderHook, act} from '@testing-library/react'

describe('Local Storage: ', () => {
  test('should return the initialvalue and set a new key', () => {
    const value = 'value';
    const value2 = 'value2'
    const { result } = renderHook(() => useLocalStorage('key', value))

    expect(result.current[0]).toBe(value);

    // updating the storedValue
    act(() => result.current[1](value2))
    expect(result.current[0]).toBe(value2);
  })
});
