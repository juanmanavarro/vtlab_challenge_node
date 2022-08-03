import { describe, expect, it } from "vitest";
import Password from "./password";

describe("Password", () => {
  it("must include one increasing straight of at least three letters", () => {
    expect(Password.validate("aabc")).toBe(true);
    expect(Password.validate("acd")).toBe(false);
  });

  it("should not contain the letters i, O, or l", () => {
    expect(Password.validate("aabci")).toBe(false);
    expect(Password.validate("aabcO")).toBe(false);
    expect(Password.validate("aabcl")).toBe(false);
  });

  it("must contain at least two non-overlapping pairs of letters, like aa, bb, or cc", () => {
    expect(Password.validate("aa")).toBe(false);
    expect(Password.validate("aacde")).toBe(true);
  });

  it("can not be longer than 32 characters", () => {
    expect(Password.validate("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc")).toBe(false);
    expect(Password.validate("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc")).toBe(true);
  });

  it("can only contain lower case alphabetic characters", () => {
    expect(Password.validate("123")).toBe(false);
  });
});
