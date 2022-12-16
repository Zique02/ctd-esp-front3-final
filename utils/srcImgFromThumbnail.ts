type thumbnail = {
  path: string;
  extension: string;
};
export function getImgSrcFromThumbnail(thumbnail: thumbnail) {
  if (!thumbnail) {
    return "";
  }
  return `${thumbnail.path}.${thumbnail.extension}`;
}
