import { expect, test } from "vitest";
import Password from "./password";

test("Password pass validation", () => {
  expect(Password.validate("aabc")).toBe(true);
  expect(Password.validate("acd")).toBe(false);
  expect(Password.validate("O")).toBe(false);
  expect(Password.validate("i")).toBe(false);
  expect(Password.validate("l")).toBe(false);
  expect(Password.validate("I")).toBe(false);
  expect(Password.validate("aa")).toBe(false);
  expect(Password.validate("aacde")).toBe(true);
  expect(Password.validate("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab")).toBe(false);
  expect(Password.validate("123")).toBe(false);
});
