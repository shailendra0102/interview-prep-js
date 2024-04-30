/***
 * sum(1)(2)(3)(4)....() => 10
 * add(1,2)(3,4,5)(9,0)(7,8,9,7)(1,2)()
 * debouncing -> means the method wiill be invoked after specified delay in user action
 * throttling -> means next function invocation with be done after specified time/delay
 * const test = {
     a : {b :'c'},
     d : {e : {f: 'g'}}
 } => transform this to {
      'a*b' : c,
      'd*e*f': g
 *}
 * flatten the object
 let user = {
      name: 'Shailendra',
      address: {
        personal: {
          city: 'Hamirpur',
          area: 'Sumerpur'
        },
        office: {
          city: 'Noida',
          area: {
           landmark: 'sector-62'
          }
        }
      }
 }

 ***/

 let user = {
    name: 'Shailendra',
    address: {
      personal: {
        city: 'Hamirpur',
        area: 'Sumerpur'
      },
      office: {
        city: 'Noida',
        area: {
         landmark: 'sector-62'
        }
      }
    }
  }

  const flattenObject = function(obj, parent, finalObj = {}) {
     for(let key in obj) {
        if(typeof obj[key]==='object') {
            const fkey = parent+ '_'+ key
            flattenObject(obj[key], fkey, finalObj);
        }else {
            const fkey = parent + '_' + key
            finalObj[fkey] = obj[key];
        }
     }
     return finalObj;
   
   }
  
   window.console.log(flattenObject(user, 'user'));
  
  const transformObject = function (obj, collector = [], finalObj = {}) {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        transformObject(obj[key], [...collector, key], finalObj);
      } else {
        const fkey = [...collector, key].join("*");
        finalObj[fkey] = obj[key];
        collector = [];
      }
    }
    return finalObj;
  };
  const test = {
    a: { b: "c" },
    d: { e: { f: "g" } },
  };
  
  window.console.log(transformObject(test));
  
  var sum = function (x) {
    return function (y) {
      if (y) {
        return sum(x + y);
      } else {
        return x;
      }
    };
  };
  
  window.console.log(sum(1)(2)(3)(4)(5)());
  
  var add = function (...args1) {
    return function (...args2) {
      if (args2.length) {
        return add(...[...args1, ...args2]);
      } else {
        return args1.reduce((acc, item) => (acc = acc + item));
      }
    };
  };
  
  window.console.log(add(1, 2)(3, 4, 5)(9, 0)());
  
  function search() {
    window.console.log(`searching ${Math.random()}`);
  }
  
  window.search = search;
  window.debounce = function (Fn, delay) {
    let timer;
    let context = this;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        Fn.call(context);
      }, delay);
    };
  };
  window.betterSearch = debounce(search, 1000);
  
  const throttle = function (Fn, delay) {
    let isAvailableForCall = true;
    let context = this;
    return function () {
      if (isAvailableForCall) {
        isAvailableForCall = false;
        Fn.call(context);
        setTimeout(() => {
          isAvailableForCall = true;
        }, delay);
      } else {
        window.console.log("Function is not available for user action");
      }
    };
  };
  
  window.betterClick = throttle(search, 5000);
  