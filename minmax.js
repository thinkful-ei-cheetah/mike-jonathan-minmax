'use strict';

const arr = [1, 72, 50, 100, 23];
function maxAmount(numbers) {
  let currentMax = numbers[0];
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] > currentMax) {
      currentMax = numbers[i];
    }
    i++;
  }
  return currentMax;
}
console.log(maxAmount(arr));

function minAmount(numbers) {
  let currentMin = numbers[0];
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] < currentMin) {
      currentMin = numbers[i];
    }
    i++;
  }
  return currentMin;
}
console.log(minAmount(arr));