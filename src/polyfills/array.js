// Array.map

var arr = [1,2,3,4];
var callBack = function(item,index,array) {
    // console.log(this.name);
    return item*2;
}
var transformedArray = arr.map(callBack, {name: 'Shailendra'});
console.log(transformedArray);

// Polyfill for Array.map

Array.prototype.myMap = function(callbackFn, context=null) {
    var arr = this;
    var newArr = [];
    for(let i=0; i<arr.length; i++) {
        newArr.push(callbackFn.call(context, arr[i], i, arr));
    }
    return newArr;
}

var transformedArray = arr.myMap(callBack, {name: 'Shailendra'});
console.log(transformedArray);

// Array.filter

var arr = [1,2,3,4];
var callBack = function(item, index, array) {
    // console.log(item,index,array);
    return item%2 == 0;
}
var filteredArray = arr.filter(callBack);
console.log(filteredArray);

// Polyfill for Array.filter

Array.prototype.myFilter = function(callback) {
    var arr = this;
    var filteredArray = [];
    for(let i=0; i< arr.length; i++) {
        if(callback.call(null, arr[i], i, arr)) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

var filteredArray = arr.myFilter(callBack);
console.log(filteredArray);


// Array.sort

var arr = [
    {name: 'Shailendra', age: 30},
    {name: 'Shailendra', age: 20},
    {name: 'Shailendra', age: 28},
    {name: 'Shailendra', age: 15},
    {name: 'Shailendra', age: 1},
    {name: 'Shailendra', age: 1}
]

var callBack = function(item1,item2) {
    return item1.age > item2.age ? 1 : item1.age == item2.age ? 0 : -1 ;
}

var sortedArray = arr.sort(callBack);
console.log(sortedArray);

Array.prototype.mySort = function(cb = (a,b) => a-b ) {
    var arr = this;
    for(var i=0; i< arr.length; i++) {
        for(var j=0; j<(arr.length-(i+1)); j++) {
            if(cb.call(null, arr[j],arr[j+1])>0) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

var sortedArray = arr.mySort(callBack);
console.log(sortedArray);

// Array.reduce

var reducerFn = function(accumulator, currentValue, currentIndex, array) {
    accumulator = accumulator+currentValue;
    return accumulator;
}

var arr = [1,2,3,4,5,6,7,8];

var output = arr.reduce(reducerFn,10);
console.log(output);

// Polyfill for Array.reduce

Array.prototype.myReduce = function(cb, startVal) {
    var arr = this;
    var i =0;
    var accumulator = startVal ? startVal : arr[i++];
    for(i; i<arr.length; i++) {
        accumulator = cb.call(null,accumulator,arr[i],i,arr);
    }
    return accumulator;
}

var output = arr.myReduce(reducerFn);
console.log(output);