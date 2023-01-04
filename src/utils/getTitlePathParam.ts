const BRACKET_REGEX = /\(|\)|\[|\]|\{|\}|\<|\>/g;
const SPECIAL_CHARACTERS =
  /\!|\@|\#|\$|\%|\^|\&|\*|\+|\=|\\|\/|\?|\:|\;|\"|\'|\.|\,/g;

export default (title: string) => {
  return title
    .replace(BRACKET_REGEX, '')
    .replace(SPECIAL_CHARACTERS, '')
    .replace(/\s/g, '-');
};
