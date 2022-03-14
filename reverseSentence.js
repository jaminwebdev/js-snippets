let string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
let reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
let reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

const reverseBySeparator = (string, separator) => {
  return string.split(separator).reverse().join(separator);
}