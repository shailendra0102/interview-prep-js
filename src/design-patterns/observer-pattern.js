//https://blog.lftechnology.com/implementing-the-observer-pattern-in-javascript-198ccb62124d
//https://hackernoon.com/observer-vs-pub-sub-pattern-50d3b27f838c
class Subject {
    constructor(state) {
      this.state = state;
      this.observers = [];
    }
  
    setState(state) {
      this.state = state;
      this.notify(state);
    }
  
    subscribe(observer) {
      this.observers.push(observer);
    }
  
    notify(changedState) {
      this.observers.forEach(observer => observer.notify(changedState));
    }
  }
  
  class Observer {
    constructor(obserable) {
      obserable.subscribe(this);
      this.subscription = [];
    }
  
    subscribe(callback) {
      this.subscription.push(callback);
    }
  
    notify(value) {
      this.subscription.forEach(subscription => subscription.call(null, value));
    }
  }
  
  const observable = new Subject(10);
  const observerA = new Observer(observable);
  const observerB = new Observer(observable);
  
  observerA.subscribe(data => {
    console.log("observerA", data);
  });
  
  observerB.subscribe(data => {
    console.log("observerB", data);
  });
  
  observable.setState(20);
  observable.setState(30);
  observable.setState(20);
  
  /* Output
  observerA 20
  observerB 20
  observerA 30
  observerB 30
  observerA 20
  observerB 20
  */