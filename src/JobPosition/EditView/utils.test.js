import { objectHasTruthyValue } from './utils';

test('EditView utils', () => {
  expect(objectHasTruthyValue()).toBe(false);
  expect(objectHasTruthyValue({})).toBe(false);
  expect(objectHasTruthyValue({ key: false })).toBe(false);
  expect(objectHasTruthyValue({ key1: false, key2: false })).toBe(false);
  expect(objectHasTruthyValue({ key1: false, key2: false, key3: true })).toBe(true);
});
