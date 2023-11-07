export function isVowel(str: string) {
  if (
    str.toLowerCase() === "a" ||
    str.toLowerCase() === "e" ||
    str.toLowerCase() === "i" ||
    str.toLowerCase() === "o" ||
    str.toLowerCase() === "u"
  ) {
    return true;
  } else {
    return false;
  }
}
//console.log(isVowel("k"));
