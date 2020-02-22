const fib = require("./index");

describe("Fib function", () => {
  test("should exists", () => {
    expect(fib).toBeDefined();
    expect(typeof fib).toEqual("function");
  });

  test("should calculate correct fib value for 1", () => {
    expect(fib(1)).toEqual(1);
  });

  test("should calculate correct fib value for 2", () => {
    expect(fib(2)).toEqual(1);
  });

  test("should calculate correct fib value for 3", () => {
    expect(fib(3)).toEqual(2);
  });

  test("should calculate correct fib value for 4", () => {
    expect(fib(4)).toEqual(3);
  });

  test("should calculate correct fib value for 15", () => {
    expect(fib(15)).toEqual(610);
  });
});
