import { push } from "../methods/push";

describe('push function', () => {
  it('should add a number to the array', () => {
    const arrayOfNums = [2, 3, 4, 5];
    const num = 6;
    const result = push(arrayOfNums, num);
    expect(result).toEqual([2, 3, 4, 5, 6]); 
  });

  it('should add a string to the array', () => {
    const arrayOfNums = [2, 3, 4, 5];
    const str = 'hello';
    const result = push(arrayOfNums, str);
    expect(result).toEqual([2, 3, 4, 5, 'hello']); 
  });

  it('should add a boolean to the array', () => {
    const arrayOfNums = [2, 3, 4, 5];
    const bool = true;
    const result = push(arrayOfNums, bool);
    expect(result).toEqual([2, 3, 4, 5, true]); 
  });

  it('should add an object to the array', () => {
    const arrayOfNums = [2, 3, 4, 5];
    const obj = { key: 'value' };
    const result = push(arrayOfNums, obj);
    expect(result).toEqual([2, 3, 4, 5, obj]); 
  });
});
