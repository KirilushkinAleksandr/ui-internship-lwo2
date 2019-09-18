function SimTime() {
  let simTime = 0;
  let realSimTime = 0;
  let speed = 1;

  this.get = function() {
    return simTime;
  };

  this.setSpeed = function(speedUpd) {
    speed = speedUpd;
  };

  this.update = function(currentTime) {
    simTime += (currentTime - realSimTime) * speed;
    realSimTime = currentTime;
  };
}

export {SimTime};
