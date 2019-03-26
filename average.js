'use strict';

function average(numbers) {
    let sumOfNumbers = 0;
    numbers.forEach((number) => {
        sumOfNumbers += number;
      });
    return sumOfNumbers/numbers.length;
  }

  const arr = [10, 20, 30];

  console.log(average(arr));