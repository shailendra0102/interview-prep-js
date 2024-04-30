const person = function getPerson(city,state,country) {
    console.log(`My name is ${this.name}, I belong to ${city},${state},${country}`);
} 

// call usage

person.call({name:'Shailendra'},'Hamirpur','Uttar Pradesh','India');

// call polyfill

Function.prototype.myCall = function(context, ...params) {
    const fn = this;
    fn.apply(context,params);
}

person.myCall({name:'Shailendra'},'Hamirpur','Uttar Pradesh','India');

// apply usage

person.apply({name:'Shailendra'},['Hamirpur','Uttar Pradesh','India']);

// apply polyfill

Function.prototype.myApply = function(context,params) {
    const fn = this;
    fn.call(context,...params);
}

person.myApply({name:'Shailendra'},['Hamirpur','Uttar Pradesh','India']);

// bind usage

const bindedMethod = person.bind({name:'Shailendra-bind'});
bindedMethod('Hamirpur','Uttar Pradesh','India');

// bind polyfill

Function.prototype.myBind = function(context) {
    const fn = this;
    return function(...params) {
        fn.apply(context,params);
    }
}

const myBindedMethod = person.myBind({name:'Shailendra-myBind'});
myBindedMethod('Hamirpur','Uttar Pradesh','India');