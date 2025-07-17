# 1. Event Loop
- allows node.js to perform non-blocking Input/Output operations.

- How it works
  - Node.js uses a single-threaded event loop model that handles multiple concurrent operations via callbacks.
  - sync code exec --> Promises(api calls, database calls), setImmidiate(), setTimeout() with timeout

# execution
1. console.log
2. Promises
3. setImmediate()
4. setTimeout()

# 2. Streams
- read data from a source or write data to a destination in a continuous manner.

- Readable - file read
- Writeable - file write
- Duplex - both readable and writeable
- Transform - like compression

# 3. Buffers
- Buffers are used to handle binary data directly in memory.

- In example:
  - hello = <Buffer 48 65 6c 6c 6f>

- Modify buffer:
  - data[0] = 0x68(h)
  - change 0th index data for data var to 'h'

# 4. Child processes
- Allows you to run other processes (scripts, shell commands) from Node.js using child_process module.
- we can do CPU intensive tasks, bash commands

1. exec
  - import { exec } from 'child_process'
  - we can execute any bash command with it
  - like: ls, cd dir, mkdir folder_name, touch index.js
  ``` bash
  exec('command', (err, stdout) => {
    if(err) return console.log(err)
    console.log(`Output: ${stdout}`)
  });
  ```

# 5. Clustering
- Clustering allows you to create child processes (workers) that all share the same server port.
- Leverage multi-core CPUs to improve performance.
- Letting you scale your app across CPU cores

``` js
if(cluster.isPrimary) {
  // if the current process is primary
  
  const numCPUs = os.cpus().length;
  // get the count of cpu cores

  console.log(`Primary PID: ${process.pid}`);
  // log the primary process id

  for(let i = 0; i < numCPUs; i++) {
    cluster.fork(); // create a worker
    // create workers equal to number of cores
  }

  cluster.on('exit', (worker, code) => {
    console.log(`Worker ${worker.process.pid} died`);
    // listens on exit process, if worker exit then logs them
  });
}
else {
  http.createServer((req, res) => {
    res.end(`Handled by worker ${process.pid}`);
    // each worker creates an http server on port 3000
    // When a request comes in, it responds with the worker’s process ID
    // Each worker runs independently but shares the port.
  }).listen(3000);

  console.log(`Worker ${process.pid} started`);
  // log every worker with process id
}
```

- Example output
``` js
Master PID: 11852
Worker 1148 started
Worker 9016 started
Worker 4276 started
Worker 17952 started
Worker 18292 started
Worker 2556 started
Worker 7288 started
Worker 2800 started
```

- If you need to kill any worker, open another terminal then run
``` js
kill 9016
```

- Note: If you kill Master PID, then it kills the cluster and all workers died.