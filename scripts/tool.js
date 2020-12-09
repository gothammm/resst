module.exports = {
  timer: {
    start: () => {
      return process.hrtime();
    },
    end: startTime => {
      return process.hrtime(startTime)[1] / 1000000;
    }
  }
};
