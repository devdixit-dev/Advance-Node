# 1. Event Loop
- allows node.js to perform non-blocking Input/Output operations.

- How it works: Node.js uses a single-threaded event loop model that handles multiple concurrent operations via callbacks.

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