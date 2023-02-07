// Задание 5 модуль 6.8
let getPower = (x, n) => {
   if (x > 0 && n > 0) {
      return x ** n;
   } else {
      return 'Данные неверны';
   }
}
let result = getPower();
console.log(getPower(2, 4), getPower(1, 0), getPower(9, 3));