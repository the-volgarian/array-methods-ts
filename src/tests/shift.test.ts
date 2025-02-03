import { shift } from "../methods/shift";

describe('shift function', () => {
  it('should remove the first number from the array', () => {
    const arrayOfNums = [1, 2, 3, 4];
    const result = shift(arrayOfNums);
    expect(result.array).toEqual([2, 3, 4]);
    expect(result.firstElement).toBe(1);
  });

  it('should remove the first string from the array', () => {
    const arrayOfStrings = ['a', 'b', 'c'];
    const result = shift(arrayOfStrings);
    expect(result.array).toEqual(['b', 'c']);
    expect(result.firstElement).toBe('a');
  });

  it('should remove the first boolean from the array', () => {
    const arrayOfBooleans = [true, false, true];
    const result = shift(arrayOfBooleans);
    expect(result.array).toEqual([false, true]);
    expect(result.firstElement).toBe(true);
  });

  it('should remove the first object from the array', () => {
    const arrayOfObjects = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
    const result = shift(arrayOfObjects);
    expect(result.array).toEqual([{ name: 'Bob' }, { name: 'Charlie' }]);
    expect(result.firstElement).toEqual({ name: 'Alice' });
  });

  it('should return undefined if the array is empty', () => {
    const emptyArray: any[] = [];
    const result = shift(emptyArray);
    expect(result.array).toEqual([]);
    expect(result.firstElement).toBeUndefined();
  });

  it('should remove the only element in the array', () => {
    const singleElementArray = [42];
    const result = shift(singleElementArray);
    expect(result.array).toEqual([]);
    expect(result.firstElement).toBe(42);
  });
});
