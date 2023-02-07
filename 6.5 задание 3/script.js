// Задание 3 модуль 6.5
function getSum(x) {
   return function (y) {
      return x + y
   };
}
console.log(getSum(0)(1), getSum(25)(4), getSum(7)(8), getSum(5)(5),);