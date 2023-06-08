export const getImagePublicId = (imageLink) => {
  const startIndex = imageLink.indexOf("/avatar/") + 1;
  const endIndex = imageLink.lastIndexOf(".");
  const result = imageLink.substring(startIndex, endIndex);
  return result;
};
