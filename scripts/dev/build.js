const watcher = require('./watcher');
const signale = require('signale');
const { build, postBuild } = require('../build');
const { timer: time } = require('../tool');
signale.config({
  displayLabel: false
});

const interactive = new signale.Signale({
  interactive: true,
  config: {
    displayLabel: false
  }
});

(async () => {
  try {
    const buildStartTime = time.start();
    const incrementalBuild = await build({ incremental: true });
    postBuild();
    signale.success(`build completed in ${time.end(buildStartTime)}ms`);
    watcher.onChange(async () => {
      const buildStartTime = time.start();
      interactive.await('rebuilding..');
      const result = await incrementalBuild.rebuild();
      interactive.success(`rebuild completed in ${time.end(buildStartTime)}ms`);
    });
  } catch (e) {
    signale.error(e);
  }
})();
