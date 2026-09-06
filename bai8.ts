// Bai 8
export {};

Promise.resolve(2)
    .then(number => number * number)
    .then(number => number * 2)
    .then(number => number + 5)
    .then(result => console.log(result));
