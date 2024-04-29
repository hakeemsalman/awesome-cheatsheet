# Stacks

Stacks is the implementation of Dynamic array.

**Concept:** A linear data structure that follows a Last-In-First-Out (LIFO) principle. Imagine a stack of plates - you can only add or remove plates from the top.
* **Operations:**
    * **`push(element)`:** Adds an element to the top of the stack.
    * **`pop()`:** Removes and returns the element from the top of the stack.
    * **`peek()`:** Returns the element at the top of the stack without removing it.
    * **`isEmpty()`:** Checks if the stack is empty.
    * **`size()`:** Returns the number of elements currently in the stack.
* **Implementation:**
    * Stacks can be implemented using arrays or linked lists.
        * **Array Implementation:** Simpler but might lead to wasted space if the stack doesn't grow to its full capacity.
        * **Linked List Implementation:** More memory-efficient but might have slightly slower access times due to pointer manipulation.
    * A pointer (`top`) keeps track of the position of the top element.
* **Applications:**
    * Undo/redo functionality in applications.
    * Function call stack during program execution.
    * Backtracking algorithms (e.g., maze solving).
    * Expression evaluation (postfix notation).

**Additional Notes:**

* Stacks are often used in conjunction with other data structures like queues.
* There might be variations of stacks with additional functionalities (e.g., min/max stack that keeps track of the minimum or maximum element).

**NeetCode's Video (Potential Content):**

* NeetCode's video might cover specific use cases or problem-solving techniques related to stacks. 
* He might discuss the trade-offs between array and linked list implementations.
* The video might showcase code examples for stack operations in a particular programming language.

**Tips for Note-Taking:**

* Focus on understanding the core concepts (LIFO principle, operations).
* Pay attention to specific examples or problem-solving techniques discussed in the video.
* Note down the implementation details (array vs. linked list) if covered.
* If the video uses code examples, try to understand the logic and syntax even if you're not familiar with the language.

I hope these detailed notes provide a solid foundation for understanding Stacks. If you have any further questions or specific points from the video you'd like to clarify, feel free to ask!


```java
import java.util.ArrayList;

// Implementing a stack is trivial using a dynamic array
// (which we implemented earlier).
public class Stack {

    ArrayList<Integer> stack = new ArrayList<Integer>();

    public Stack() {   
    }

    public void push(int n) {
        stack.add(n);
    }

    public int pop() {
        return stack.remove(stack.size() - 1);
    }

    public int size() {
        return stack.size();
    }
}
```

```js
// Implementing a stack is trivial using a dynamic array
// (which we implemented earlier).
class Stack {
    constructor() {
        this.stack = new Array();                                                                   
    }

    push(n) {
        this.stack.push(n);
    }

    pop() {
        return this.stack.pop();
    }

    size() {
        return this.stack.length;
    }
}

```


SUGGESTED PROBLEMS

[https://leetcode.com/problems/baseball-game/](https://leetcode.com/problems/baseball-game/)

[https://leetcode.com/problems/valid-parentheses/](https://leetcode.com/problems/valid-parentheses/)

[https://leetcode.com/problems/min-stack/](https://leetcode.com/problems/min-stack/)