import cluster from 'cluster';
import http from 'http';
import os from 'os';


if(cluster.isPrimary) {
  const numCPUs = os.cpus().length; // 8
  console.log(`Master PID: ${process.pid}`); // 2004

  for(let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.process.pid} died`)
  });
}
else {
  http.createServer((req, res) => {
    res.end(`Handled by worker ${process.pid}`);
  }).listen(3000);

  console.log(`Worker ${process.pid} started`);
}