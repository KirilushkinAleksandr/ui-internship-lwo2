const peopleInBus = function(busStops) {
  return busStops.reduce(
      (result, current) => result + current[0] - current[1],
      0
  );
};

export {peopleInBus};
