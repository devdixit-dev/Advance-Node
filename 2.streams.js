import { createReadStream } from 'fs';

const readStream = createReadStream('largefile.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('Reading chunk:', chunk.length);
});