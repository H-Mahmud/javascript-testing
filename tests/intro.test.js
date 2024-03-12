import { describe, expect, it } from "vitest";
import { fizzBuzz, max } from "../src/intro";

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
