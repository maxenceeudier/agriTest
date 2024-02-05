type AddPrefix<inputType, outputType = inputType> = (
  array: inputType[],
  result: outputType[],
  transformData: (data: inputType[]) => outputType
) => outputType[];

type ObjectWithValues = { value: String };

const addPrefix: AddPrefix<Number | String | ObjectWithValues> = (
  array,
  result,
  transformData
) => {
  const length = array?.length;

  if (!length) return result;

  for (let i = 0; i < length; i++)
    result.push(transformData(array.slice(0, i + 1)));

  return addPrefix(array.slice(1, length), result, transformData);
};

export default addPrefix;
