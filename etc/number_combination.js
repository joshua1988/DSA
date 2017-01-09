// 5C3
// 543 a(a-1)(a-2)
// 321  b(b-1)(b-2)
// reference : https://www.sitepoint.com/recursion-functional-javascript/

var numerator = 1, // 분자
    denominator = 1; // 분모

var numberComb = function (length, n) {
  if (length == length-n) {
    return numerator / denominator;
  } else {
    numerator *= length;
    denominator *= n;
    console.log("length : " + length + ". numerator : " + numerator + ". denominator : " + denominator);
  }
  return numberComb(length-1, n-1);
};
numberComb(5,3);
