/*JavaScript execution context */

/*
 Gloal execution context ==> this in windows

 1=> Global
 2=> Functional
 3=> Eval

  =====================================================================================
  let val1 = 2
  let val2 = 3
  function addNum(num1,num2){
    let total = num1 + num2
    return total
  }
  let result1 = addNum(num1,num2)
  let result2 = addNum(10,20)
  conosle.log(result)

 []=>contains code =>Global execution (this)=> memory creation phase(alocates memory for variables) => Execution Phase 

 After Global execution 1st Cycle is Memory phase => val1 and val2 is undefined, addNum will be defination of function 
 and result1 and result2 will also be undefined.

 Now comes Execution Phase
 val1 = 2
 val2 = 3
 no work will be in addNum function
 addNum in result1 will have new container with execution thread and new variable environment
 {we can san for result1 the number of times the function is called it will creat a new container}

 Container ==> memory Phase ==> va1 & val2 & total = undefined; Execution Phase => num1 => 2,num2=3& total = 5 will go in Global exc
 amd top Execution Phase will get 5.

 Container for result2 will be again created for result2
 
 ======================================================================================================

 CALL STACK

 []=>callstack==> function will come will be executed and go,it will always has global Exce context afte 

 if nested thenm LIFO will come in context .. first in first out.

*/ 
