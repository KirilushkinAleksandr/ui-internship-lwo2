function runningAverage(newTime) {
  const arr = [];
  return (newTime) => {
    arr.push(newTime);
    return arr.reduce((sum, item) => sum + item) / arr.length;
  };
}

export {runningAverage};
