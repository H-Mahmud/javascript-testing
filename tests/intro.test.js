import { describe, expect, it } from "vitest";
import { max } from "../src/intro";

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
