function SimTime() {
  let simTime = 0;
  let realSimTime = 0;
  let speed = 1;

  SimTime.prototype.get = function() {
    return simTime;
  };

  SimTime.prototype.setSpeed = function(speedUpd) {
    speed = speedUpd;
  };

  SimTime.prototype.update = function(currentTime) {
    simTime += (currentTime - realSimTime) * speed;
    realSimTime = currentTime;
  };
}

export {SimTime};
