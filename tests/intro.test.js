import { describe, expect, it } from "vitest";
import { factorialNumber, fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("Should be return the first argument if it is greater", () => {
    expect(max(3, 2)).toBe(3);
  });

  it("Should be return the second argument if it is greater", () => {
    expect(max(2, 3)).toBe(3);
  });

  it("Should be return the first argument if arguments are equal", () => {
    expect(max(3, 3)).toBe(3);
  });
});

describe("fizzBuzz", () => {
  it("Should be return FizzBuzz if argument is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("Should be return Fizz if argument is only divisible by 3", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });

  it("Should be return Fizz if argument is only divisible by 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("Should be return argument as a string if argument is not divisible by 3 or 5", () => {
    expect(fizzBuzz(7)).toBe("7");
  });
});

describe("factorialNumber", () => {
  it("Should be return 1 if argument is 0", () => {
    expect(factorialNumber(0)).toBe(1);
  });

  it("Should be return 1 if argument is 1", () => {
    expect(factorialNumber(1)).toBe(1);
  });

  it("Should be return 2 if argument is 2", () => {
    expect(factorialNumber(2)).toBe(2);
  });

  it("Should be return 3 if argument is 6", () => {
    expect(factorialNumber(3)).toBe(6);
  });

  it("Should be return 4 if argument is 24", () => {
    expect(factorialNumber(4)).toBe(24);
  });

  it("Should be return 7 if argument is 5040", () => {
    expect(factorialNumber(7)).toBe(5040);
  });

  it("Should be return undefined if argument is a negative number", () => {
    expect(factorialNumber(-7)).toBe(undefined);
  });
});
