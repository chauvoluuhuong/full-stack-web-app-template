import {
  unique,
  chunk,
  flatten,
  groupBy,
  intersection,
  difference,
  shuffle,
} from "../array-utils";

describe("Array Utils", () => {
  describe("unique", () => {
    it("should remove duplicates", () => {
      expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
      expect(unique(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
    });
  });

  describe("chunk", () => {
    it("should chunk array into smaller arrays", () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
      expect(chunk([1, 2, 3, 4], 2)).toEqual([
        [1, 2],
        [3, 4],
      ]);
    });

    it("should throw error for invalid chunk size", () => {
      expect(() => chunk([1, 2, 3], 0)).toThrow();
      expect(() => chunk([1, 2, 3], -1)).toThrow();
    });
  });

  describe("flatten", () => {
    it("should flatten nested arrays", () => {
      expect(flatten([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe("groupBy", () => {
    it("should group array elements by key", () => {
      const people = [
        { name: "John", age: 30 },
        { name: "Jane", age: 25 },
        { name: "Bob", age: 30 },
      ];
      const grouped = groupBy(people, (person) => person.age);
      expect(grouped[30]).toHaveLength(2);
      expect(grouped[25]).toHaveLength(1);
    });
  });

  describe("intersection", () => {
    it("should find intersection of arrays", () => {
      expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    });
  });

  describe("difference", () => {
    it("should find difference between arrays", () => {
      expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1]);
    });
  });

  describe("shuffle", () => {
    it("should shuffle array", () => {
      const original = [1, 2, 3, 4, 5];
      const shuffled = shuffle(original);
      expect(shuffled).toHaveLength(original.length);
      expect(shuffled).toEqual(expect.arrayContaining(original));
    });
  });
});
