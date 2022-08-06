export function getOneOrTwoUppercaseLetters(title: string) {
  const twoFirstWords = title.split(" ").filter((_, index) => index < 2);

  return twoFirstWords.map((word) => word.charAt(0).toUpperCase()).join("");
}
