function SimTime() {
  this.simTime = 0;
  this.realSimTime = 0;
  this.speed = 1;
}
SimTime.prototype.get = function() {
  return this.simTime;
};

SimTime.prototype.setSpeed = function(speedUpd) {
  this.speed = speedUpd;
};

SimTime.prototype.update = function(currentTime) {
  this.simTime += (currentTime - this.realSimTime) * this.speed;
  this.realSimTime = currentTime;
};

export {SimTime};
