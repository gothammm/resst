const chokidar = require('chokidar');
const watcher = chokidar.watch(['src/**/**', 'index.html']);

module.exports = {
  onChange: action => watcher.on('change', () => Promise.resolve(action()))
};
