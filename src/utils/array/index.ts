export const removeArrayItem = <T>(array: T[], index: number): T[] => {
  if (index < 0) return array;

  const result = [...array];
  result.splice(index, 1);
  return result;
};

export const moveArrayItem = <T>(
  array: T[],
  from: number,
  to: number
): T[] => {
  if (from === to) return array;

  const item = array[from];
  const tempArray = removeArrayItem(array, from);

  return [
    ...tempArray.slice(0, to),
    item,
    ...tempArray.slice(to)
  ]
};
