export const getFullCurrentYear = () => new Date().getFullYear();

export const extractFileNameFromSrc = (imageSrc) => imageSrc.split('/').reverse()[0];