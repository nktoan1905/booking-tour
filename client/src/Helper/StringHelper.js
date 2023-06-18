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
export const getImagePublicIdOfToursImageFolder = (imageLink) => {
  const startIndex = imageLink.indexOf("/toursImage/") + 1;
  const endIndex = imageLink.lastIndexOf(".");
  const result = imageLink.substring(startIndex, endIndex);
  return result;
};

export const getClassFontawesome = (htmlString) => {
  const classIndex = htmlString.indexOf('class="');
  if (classIndex !== -1) {
    const classSubstring = htmlString.substring(classIndex + 7);

    const closingQuoteIndex = classSubstring.indexOf('"');
    if (closingQuoteIndex !== -1) {
      const classValue = classSubstring.substring(0, closingQuoteIndex).trim();

      return classValue;
    }
  }
};
