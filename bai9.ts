// Bai 9
export {};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

new Promise<number[]>(resolve => {
    setTimeout(() => resolve(numbers), 1000);
})
    .then(values => values.filter(number => number % 2 === 0))
    .then(result => console.log(result));
