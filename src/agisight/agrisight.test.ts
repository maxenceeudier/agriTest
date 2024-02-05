import addPrefix from "./agrisight";

describe("addPrefix", () => {
  test("test c,n,s", () => {
    const prefix = ["c", "n", "s"];
    const expectedResult = ["c", "cn", "cns", "n", "ns", "s"];
    const result = addPrefix(prefix, []);
    expect(result).toEqual(expectedResult);
  });

  test("test a,b", () => {
    const prefix = ["a", "b"];
    const expectedResult = ["a", "ab", "b"];
    const result = addPrefix(prefix, []);
    expect(result).toEqual(expectedResult);
  });

  test("test coucou,123,a,b,c", () => {
    const prefix = ["coucou", "123", "a", "b", "c"];
    const expectedResult = [
      "coucou",
      "coucou123",
      "coucou123a",
      "coucou123ab",
      "coucou123abc",
      "123",
      "123a",
      "123ab",
      "123abc",
      "a",
      "ab",
      "abc",
      "b",
      "bc",
      "c",
    ];
    const result = addPrefix(prefix, []);
    expect(result).toEqual(expectedResult);
  });

  test("should return empty array if input is empty", () => {
    const result = addPrefix([], []);
    expect(result).toEqual([]);
  });
});
