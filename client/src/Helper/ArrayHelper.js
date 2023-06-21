export function removeDuplicates(parentArray, childArray) {
  var parentIds = new Set(childArray.map((item) => item.id));
  var result = parentArray.filter((item) => !parentIds.has(item.id));
  return result;
}
