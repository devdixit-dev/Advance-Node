const buf = Buffer.from('Hello');

console.log(buf);          // <Buffer 48 65 6c 6c 6f>
console.log(buf.toString());  // Hello
console.log(buf.length);   // 5


const data = Buffer.from('The data is buffered');

console.log(data.toString())
console.log(data.length);

// modifying buffer
buf[0] = 0x68;
// H from buf[0] index values changes to 0x68 (small 'h')
console.log(buf.toString()) // hello