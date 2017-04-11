const c9m = require('c9m');
const os = require('os');


class Sensor extends c9m.Sensor {

  constructor () {
    super();
    this.name = 'process-memory';
  }

  measure () {
    const memoryUsage = process.memoryUsage();
    this.emit('value', {
      rss: parseInt(memoryUsage.rss / 1024),
      total: parseInt(memoryUsage.heapTotal / 1024),
      used: parseInt(memoryUsage.heapUsed / 1024)
    });
  }
}

module.exports = Sensor;
