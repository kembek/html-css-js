const Car = (function(mark, maxSpeed) {
  let speed = 0;
  let state = false;

  return {
    printMark() {
      console.log("this car - ", mark);
    },
    power() {
      state = !state;
    },
    printState() {
      console.log("this car state ", state ? "ON" : "OFF");
    },
    run() {
      if (!state) return console.log("Please power on car");
      console.log("car run");
      while (speed < maxSpeed) {
        speed += 5;
        console.log("Speed ", speed);
      }
    }
  };
})("audi", 150);

Car.power();
Car.run();
Car.printMark();
Car.printState();
