var realFn = function(id) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(json => console.log(json))
}

function debounce(fn,debounceTime) {
    var timer;
    return (...params) => {
        var context = this;
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            fn.apply(context, params)
        }, debounceTime);
    };
}

var method = debounce(realFn, 500);