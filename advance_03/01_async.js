/*
Java script is Synchronous, single, threaded.
Execute one line of code at a time.
Execution Context, line by line execution...each Operation wait for the previous one to complete.


Blocking Code Vs Non Blocking Code..


Blocking ==> Blocking the flow of program==> readthe file Sync
Non-Blocking ==> Do not Block Execution ==> Read file Async.

Writing both code depends on use case..

Js Engine===> Memory Heap(Memory allocation) + Callstack has (GEc + loaded functions)as soon as function gets over its gets offloade from here.

/=>WebApi=> Dom Api(Only for Browsers, [SetTime out, Setinterval]=>macrotask),([fetc]h=microtask)
/=>NodeApi===> it has its own api


Event loop is described below...it keeps on checking call stack and if empty pushs call back from Task Queue.
1.
High Priority Queue(fetch(is also a webapi but is high priority)==> promices)also called Microtasks
The promises and asynchronous operations triggered by async/await are usually treated as microtasks
2.
Call back task queue for call backs(from Node/webapi) also call macrotask.



*/