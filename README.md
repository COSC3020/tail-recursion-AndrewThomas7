# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”-Andrew Thomas

Sources

#1-https://github.com/COSC3020/tail-recursion-DJReflexive/tree/main/code_module- Used this persons repository to figure out how to write and get my test code working. My test code is inspired by theirs

#2-https://www.baeldung.com/cs/fibonacci-computational-complexity- Used this website to figure out the time complexity for the classical implementation.

## Runtime Analysis

# Answer

Yes the time complexity of the classical fibbonachi algorithm and the tail recursive version do have different asymtotic complexities. 

In the classical implementation, the fibbonachi algorithm has a time complexity of around $\theta(2^n)$. This is because each call stack, opens up exponentially into other calls until the base case is reached. Think of a classical recurssion tree, that's what's happening here.

However in the tail recursive implementation you are only ever opening one stack at a time. This happens right at the end of the algorithm, and the arithmetic is handeled at least in my case in the parameters. This stop's it from having to open up more stacks. Overall giving it a linear time complexity of $\theta(n)$.

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.
