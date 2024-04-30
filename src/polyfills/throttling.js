function expensiveFn(...params) {
    console.log(params);
}

function throttle(fn, delay) {
    var context = this;
    var shouldCall = true;
    return (...params) => {
        if(shouldCall) {
            fn.apply(context,params);
            shouldCall = false;
            timer = setTimeout(()=> shouldCall = true, delay);
        }
        
    }
}

var throttledFn = throttle(expensiveFn, 4000);