import {
  capitalize,
  toCamelCase,
  toKebabCase,
  toSnakeCase,
  truncate,
  normalizeWhitespace,
} from "../string-utils";

describe("String Utils", () => {
  describe("capitalize", () => {
    it("should capitalize the first letter", () => {
      expect(capitalize("hello")).toBe("Hello");
      expect(capitalize("HELLO")).toBe("Hello");
      expect(capitalize("hELLO")).toBe("Hello");
    });

    it("should handle empty strings", () => {
      expect(capitalize("")).toBe("");
    });
  });

  describe("toCamelCase", () => {
    it("should convert to camelCase", () => {
      expect(toCamelCase("hello world")).toBe("helloWorld");
      expect(toCamelCase("Hello World")).toBe("helloWorld");
      expect(toCamelCase("hello-world")).toBe("helloWorld");
    });
  });

  describe("toKebabCase", () => {
    it("should convert to kebab-case", () => {
      expect(toKebabCase("helloWorld")).toBe("hello-world");
      expect(toKebabCase("HelloWorld")).toBe("hello-world");
      expect(toKebabCase("hello world")).toBe("hello-world");
    });
  });

  describe("toSnakeCase", () => {
    it("should convert to snake_case", () => {
      expect(toSnakeCase("helloWorld")).toBe("hello_world");
      expect(toSnakeCase("HelloWorld")).toBe("hello_world");
      expect(toSnakeCase("hello world")).toBe("hello_world");
      expect(toSnakeCase("hello-world")).toBe("hello_world");
    });
  });

  describe("truncate", () => {
    it("should truncate long strings", () => {
      expect(truncate("hello world", 5)).toBe("he...");
      expect(truncate("hello world", 5, "---")).toBe("he---");
    });

    it("should not truncate short strings", () => {
      expect(truncate("hello", 10)).toBe("hello");
    });
  });

  describe("normalizeWhitespace", () => {
    it("should normalize whitespace", () => {
      expect(normalizeWhitespace("  hello   world  ")).toBe("hello world");
      expect(normalizeWhitespace("hello\n\tworld")).toBe("hello world");
    });
  });
});
