// Implement the myFlatten which gives following output
let testArr1 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10, 11]]]]];
let flattenTestArr1 = testArr1.myFlatten();
console.log("Result: ", flattenTestArr1);
// Result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.myFlatten = function() {
    let finalResult =[];
    const Fn = function() {
       let arr = this;
       if(typeof arr === 'object'){
        for(item of arr) {
         if(typeof item !== 'object'){
           finalResult.push(item);
         }else {
           Fn.call(item);
         }
        }
       }else {
        throw new Error('I only support array');
       }
    }
    Fn.call(this);
    return finalResult;
  }
  
  console.log(testArr1.myFlatten())