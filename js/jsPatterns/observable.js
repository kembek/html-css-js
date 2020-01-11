function Observable() {
  const observers = [];

  this.addObserver = function(newObserver) {
    observers.push(newObserver);
  };

  this.sendMessage = function(message) {
    observers.forEach(observer => {
      observer.runAction(message);
    });
  };
}

function Observer(action) {
  this.runAction = function(newData) {
    action(newData);
  };
}

const observable = new Observable();

const obs1 = new Observer(data => console.log("Observer one", data));
const obs2 = new Observer(data => console.log("\nObserver two", data));

observable.addObserver(obs1);
observable.addObserver(obs2);

observable.sendMessage("Hello observable pattern");
