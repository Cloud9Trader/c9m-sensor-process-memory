const c9m = require('c9m');
const os = require('os');

const childProcess = require('child_process');


class Sensor extends c9m.Sensor {

  constructor () {
    super();
    this.name = 'process-memory';
  }

  measure () {
    const memoryUsage = process.memoryUsage();
    const percent = 100 * memoryUsage.rss / os.totalmem();

    this.emit('value', {
      rss: parseInt(memoryUsage.rss / 1024),
      total: parseInt(memoryUsage.heapTotal / 1024),
      used: parseInt(memoryUsage.heapUsed / 1024),
      percent: parseFloat(percent.toFixed(2))
    });
  }
}

module.exports = Sensor;
