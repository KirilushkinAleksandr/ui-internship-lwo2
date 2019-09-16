class SimTime {
  constructor() {
    this.simTime = 0;
    this.realTime = 0;
    this.speed = 1;
  }
  get() {
    return this.simTime;
  }
  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }
  update(currentTime) {
    this.simTime += (currentTime - this.realTime) * this.speed;
    this.realTime = currentTime;
  }
}

export {SimTime};
