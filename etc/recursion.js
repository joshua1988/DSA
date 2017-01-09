// 1) 일반 반복문
var factor = function(number) {
  var result = 1;
  var count;
  for (count = number; count > 1; count--) {
    result *= count;
  }
  return result;
};
console.log(factor(6)); // 720

// 1) 위 반복문을 재귀함수로 변형해보기
var factorial = function(number) {
  // ...
  if (number <= 0) return 1;
  return number * factorial(number-1);
};
factorial(6);

// 2) 일반 반복문
var counter = 10;
while(counter > 0) {
    console.log(counter--);
}

// 2) 위 반복문을 재귀함수로 변경해보기
var countdown = function (value) {
// ...
  if (value == 1) return 1;
  console.log(value);
  return countdown(value-1);
};
countdown(10);
