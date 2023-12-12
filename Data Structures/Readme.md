# Data Structures

# Array

Array is a collection of items that are stored conductively in the memory.

[Array Video](https://youtu.be/QJNwK2uJyGs?si=RWzgyHQgNtZ2iO_D)

1. What the address are how they work?

1. what are some of the limitations?
1. different operations you can perform on an array
1. the complexity of those operations


# Stack

1. Linear collection of items, are inserted and removed in a specific order.
1. It follows LIFO principles

Uses of Stack

1. Undo / Redo operations
1. Back tracking(puzzle maze)

```js
const stack = new Stack();
// stack = []
stack.isEmpty();    // returns boolean value
stack.push(1);      // add value in stack [1]
stack.push(3);      // add value in stack [1, 3]
stack.push(6);      // add value in stack [1, 3, 6]
stack.peek();       // give last value (6) from the stack 
stack.pop();        // remove value from stack
```

# Queue
1. Linear collection of items, are inserted and removed in a specific order.
1. It follows FIFO principles


```js
const queue = new Queue();

queue.isEmpty();    // returns boolean value
queue.enqueue(1);   // add value in queue
queue.enqueue(5);   // add value in queue
queue.enqueue(7);   // add value in queue
quere.peek();       // give top first value (1) from the queue 
queue.dequeue();    // remove value from queue

```
