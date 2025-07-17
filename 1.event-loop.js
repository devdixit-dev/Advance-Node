// console.log('Start'); // 1

// setTimeout(() => { // 4
//   console.log('Timeout');
// }, 100);

// setImmediate(() => { // 3
//   console.log('Immediate');
// });

// Promise.resolve().then(() => { // 2
//   console.log('Promise');
// });

// console.log('End'); // 1


// 1
console.log('1st');

// 2
const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  .then((data) => { console.log(`Data fetched successfully`) })
  .catch((e) => { console.log(e) }
);
console.log('2nd', response);

// 3
setImmediate(() => {
  console.log('3rd');
});

// 4
setTimeout(() => {
  console.log('last')
}, 0)