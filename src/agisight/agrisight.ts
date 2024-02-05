type AddPrefixType = (array: String[], result: String[]) => String[];

const addPrefix: AddPrefixType = (array, result) => {
  const length = array?.length;

  if (!length) return result;

  for (let i = 0; i < length; i++) result.push(array.slice(0, i + 1).join(""));

  return addPrefix(array.slice(1, length), result);
};

const prefix: String[] = ["c", "n", "s"];

export default addPrefix;
