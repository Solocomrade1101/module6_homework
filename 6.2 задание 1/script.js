// Задание 1 модуль 6.2

let arr = [1, "54", 2, "fgddf", 3, 0, 4, 5, '', 6, null, 7, 8, 10, NaN,];
let arrEven = [];
let arrOdd = [];
function getLengthEvenArr() {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0 && typeof (arr[i]) === 'number' && arr[i] !== 0) {
         arrEven.push(arr[i])
      }
   }
   console.log(arrEven.length);
};
function getLengthOddArr() {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0 && typeof (arr[i]) === 'number' && isNaN(arr[i]) !== true) {
         arrOdd.push(arr[i])
      }
   }
   console.log(arrOdd.length);
};
function getNullElements() {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 0) {
         console.log(`нулевой элемент: ${arr[i]}`);
      }
   }
};
getLengthEvenArr();
getLengthOddArr();
getNullElements();