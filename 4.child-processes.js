import { exec } from 'child_process';

exec('ping www.google.com -t', (err, stdout) => {
  if (err) return console.error(`Error: ${err}`);
  console.log(`Output: ${stdout}`);
});