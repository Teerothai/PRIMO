import { merge } from "../src/merge";

describe("Math functions", () => {
  it('merges two sorted arrays of equal length', () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const result = merge(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
  
  it('handles one empty array', () => {
    const arr1: number[] = [];
    const arr2 = [2, 4, 6];
    const result = merge(arr1, arr2);
    expect(result).toEqual([2, 4, 6]);
  }); 
  
  it('handles both arrays being empty', () => {
    const arr1: number[] = [];
    const arr2: number[] = [];
    const result = merge(arr1, arr2);
    expect(result).toEqual([]);
  }); 
  
  it('handles arrays with duplicate elements', () => {
    const arr1 = [1, 3, 3, 5];
    const arr2 = [2, 4, 6, 6];
    const result = merge(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 3, 4, 5, 6, 6]);
  });
  
  it('handles arrays of different lengths', () => {
    const arr1 = [1, 3, 5, 7];
    const arr2 = [2, 4, 6];
    const result = merge(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  
  it('handles arrays with negative numbers', () => {
    const arr1 = [-3, -2, -1];
    const arr2 = [-5, -4];
    const result = merge(arr1, arr2);
    expect(result).toEqual([-5, -4, -3, -2, -1]);
  });
});