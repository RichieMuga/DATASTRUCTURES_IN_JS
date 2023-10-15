// HOW JAVASCRIPT WORKS UNDER THE HOOD

// Javascript is a single threaded language that is none blocking.
// This means that it only contains a single callstack in which the code/program is executed and removed from the callstack


// This is how asynchronous tasks are handled in Javascript


//Memory Heap
// This is the space in which memory is allocated for example when you assign a variable a value
// There are things that could happen that could lead to lack of memory for example not cleaning after yourself after adding so many variables

//Callback stack
// This is where a program is executed
// There are cases where one may have a stack overflow, whereby the stack of the callback is at its brim
// Some cases in which this can occur is adding a loop in which no condition has been set to stop the loop
// Another case is when there has been a recusrsive function in which no condition has been set to stop the recursion action

// Web Api
// This is where an asynchronous task/job/function is firstly called before it is sent to the callback queue

//Callback queue
// For asynchronous function, there is a callback queue in which an action is kept in place whereby the the event loop checks if the callback stack is empty or can accomodate the asynchronous function then is executed
// A good example is when one fetches data from a database and it is retured asynchronously.
// Another good example is when you set a setTimeout function in Javascript and wait for the eventloop to check then add to the callstack

//Eventloop
//This checks on whether the callstack is empty then signals the callbackqueue to add the function or whatever asynchronous data was being executed.
