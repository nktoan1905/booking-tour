export const getIndexOfValueFromOptions = (value, options) => {
  const res = options.findIndex((option) => option.value === value);
  return res;
};
