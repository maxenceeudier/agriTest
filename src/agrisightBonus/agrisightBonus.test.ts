import addPrefixBonus from "./agrisightBonus";

describe("addPrefiBonus", () => {
  test("test c,n,s", () => {
    const prefix = ["c", "n", "s"];
    const expectedResult = ["c", "cn", "cns", "n", "ns", "s"];
    const result = addPrefixBonus(prefix, [], (data) => data.join(""));
    expect(result).toEqual(expectedResult);
  });

  test("test object", () => {
    const prefix = [{ value: "c" }, { value: "n" }, { value: "s" }];
    const expectedResult = ["c", "cn", "cns", "n", "ns", "s"];
    const result = addPrefixBonus(prefix, [], (data) =>
      data
        .map((e) => {
          if (
            !(
              e &&
              typeof e === "object" &&
              "value" in e &&
              typeof e.value === "string"
            )
          )
            throw new Error("Invalid data type");
          return e.value;
        })
        .join("")
    );
    expect(result).toEqual(expectedResult);
  });

  test("test 1,2,3", () => {
    const prefix = [1, 2, 3];
    const expectedResult = [1, 3, 6, 2, 5, 3];
    const result = addPrefixBonus(prefix, [], (data) =>
      data.reduce(function (accumulator, currentValue) {
        if (typeof currentValue !== "number" || typeof accumulator !== "number")
          throw new Error("Invalid data type");
        return accumulator + currentValue;
      }, 0)
    );
    expect(result).toEqual(expectedResult);
  });

  test("should return empty array if input is empty", () => {
    const result = addPrefixBonus([], [], (data) => data.join(""));
    expect(result).toEqual([]);
  });
});
