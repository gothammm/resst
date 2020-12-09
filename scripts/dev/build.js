const watcher = require('./watcher');
const signale = require('signale');
const { build, preBuild } = require('../build');
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
    preBuild();
    signale.success(`completed prebuild.`);
    const buildStartTime = time.start();
    const incrementalBuild = await build({ incremental: true });
    signale.success(`build complete in ${time.end(buildStartTime)}ms`);
    watcher.onChange(async () => {
      const buildStartTime = time.start();
      interactive.await('rebuilding..');
      const result = await incrementalBuild.rebuild();
      interactive.success(`rebuild complete in ${time.end(buildStartTime)}ms`);
    });
  } catch (e) {
    signale.error(e);
  }
})();
