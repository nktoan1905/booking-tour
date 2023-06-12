export const getImagePublicId = (imageLink) => {
  const startIndex = imageLink.indexOf("/avatar/") + 1;
  const endIndex = imageLink.lastIndexOf(".");
  const result = imageLink.substring(startIndex, endIndex);
  return result;
};
export const getImagePublicIdOfNewsImageFolder = (imageLink) => {
  const startIndex = imageLink.indexOf("/newsImage/") + 1;
  const endIndex = imageLink.lastIndexOf(".");
  const result = imageLink.substring(startIndex, endIndex);
  return result;
};

