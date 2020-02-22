const Queue = require("./index");

describe("Queue class", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test("should be a class", () => {
    expect(Queue).toBeDefined();
    expect(typeof Queue.prototype.constructor).toEqual("function");
  });

  test("should print a statements when called", () => {
    const q = new Queue();
    expect(() => {
      q.peek();
    }).not.toThrow();

    expect(console.log.mock.calls.length).toEqual(1);
  });

  test("should be able to add elements to a queue", () => {
    const q = new Queue();
    expect(() => {
      q.enqueue(1);
    }).not.toThrow();
  });

  test("should be able to remove elements from a queue", () => {
    const q = new Queue();
    expect(() => {
      q.enqueue(1);
      q.dequeue();
    }).not.toThrow();
  });

  test("should have maintained order of its elements", () => {
    const q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.dequeue()).toEqual(1);
    expect(q.dequeue()).toEqual(2);
    expect(q.dequeue()).toEqual(3);
    expect(q.dequeue()).toEqual(undefined);
  });
});
