function parent() {
    return this;
  }
  
  function child() {
    return this;
  }
  
  child.prototype = Object.create(parent.prototype);
  
  parent.prototype.doWorkForChild = function () {
    console.log("Doing Something");
    setTimeout(() => {
      const time = new Date();
      const currentTime = time.getTime();
      this.setStatus(currentTime);
    }, 5000);
  };
  
  parent.prototype.sayHelloToMe = function (name) {
    console.log(`Hello ${name}`);
  };
  
  parent.prototype.setStatus = function (status) {
    console.log(`parent setStatus called ${status}`);
  };
  
  child.prototype.start = function () {
    console.log("statrting child");
    this.sayHelloToMe("Parent");
    this.doWorkForChild();
  };
  
  child.prototype.print = function () {
    console.log("printing child");
  };
  
  child.prototype.setStatus = function (status) {
    console.log(`child setStatus called ${status}`);
  };
  
  const childInstance = new child();
  childInstance.start();