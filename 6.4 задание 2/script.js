// Задание 2 модуль 6.4
function PrimeNumber(x) {
   if (x === 0 || x === 1) {
      console.log(`число ${x} - не простое и не составное`);
   }
   for (let i = 2; i <= x; i++) {
      if (x > 1000) {
         console.log('Данные неверны');
         break;
      } else if (x % i === 0 && x !== i) {
         console.log(`число ${x} - составное`);
         break;
      } else if (x === i) {
         console.log(`число ${x} - простое`);
      }

   }
};
PrimeNumber(1000);