import { moveArrayItem, removeArrayItem } from "./index";

describe("removeArrayItem", () => {
  const array = [1, 2, 3, 4];

  test("Валидное значение (1)", () => {
    expect(removeArrayItem(array, 1)).toEqual([1, 3, 4]);
  });
  test("Валидное значение (2)", () => {
    expect(removeArrayItem(array, 3)).toEqual([1, 2, 3]);
  });
  test("Невалидное значение (1)", () => {
    expect(removeArrayItem(array, -5)).toEqual([1, 2, 3, 4]);
  });
  test("Невалидное значение (2)", () => {
    expect(removeArrayItem(array, 100)).toEqual([1, 2, 3, 4]);
  });
});

describe("moveArrayItem", () => {
  const array = [0, 1, 2, 3];

  test("from < to (1)", () => {
    expect(moveArrayItem(array, 0, 3)).toEqual([1, 2, 3, 0]);
  });
  test("from < to (2)", () => {
    expect(moveArrayItem(array, 1, 2)).toEqual([0, 2, 1, 3]);
  });
  test("from > to", () => {
    expect(moveArrayItem(array, 3, 2)).toEqual([0, 1, 3, 2]);
  });
  test("from == to", () => {
    expect(moveArrayItem(array, 0, 0)).toEqual([0, 1, 2, 3]);
  });
});
