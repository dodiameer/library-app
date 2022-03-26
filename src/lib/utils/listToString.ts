/**
 * Converts a list to a pretty string seperated with commas
 * @param list An array of string to convert to a pretty string
 * @example ['Item 1'] => 'Item 1'
 * @example ['Item 1', 'Item 2'] => 'Item 1 and Item 2'
 * @example ['Item 1', 'Item 2', 'Item 3'] => 'Item 1, Item 2 and Item 3'
 * @example [] => null
 */
export const listToString = (list: string[]) => {
  if (list.length === 0) return null;
  if (list.length === 1) return list[0];
  return `${list.slice(0, -1).join(', ')} and ${list[list.length - 1]}`
}