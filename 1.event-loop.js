console.log('Start'); // 1

setTimeout(() => { // 5
  console.log('Timeout');
}, 0);

setImmediate(() => { // 4
  console.log('Immediate');
});

Promise.resolve().then(() => { // 3
  console.log('Promise');
});

console.log('End'); // 2