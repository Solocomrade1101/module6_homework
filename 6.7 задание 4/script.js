// Задание 4 модуль 6.7
function fromAToB(a, b) {
   if (a === b) {
      console.log('Данные неверны');
      return;
   } else if (a > b) {
      function getInterval() {
         console.log(a);
         if (a === b) {
            clearInterval(intervalId);
         }
         a--;
      }
      getInterval();
      let intervalId = setInterval(getInterval, 1000)
   } else {
      function getInterval() {
         console.log(a);
         if (a === b) {
            clearInterval(intervalId);
         }
         a++;
      }
      getInterval();
      let intervalId = setInterval(getInterval, 1000)
   }

}
fromAToB(1, -4);