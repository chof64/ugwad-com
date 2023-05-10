export const listLookup = (list: any[], key: string, value: string) => {
  const item = list.find((item) => item[key] === value);
  return item;
};
