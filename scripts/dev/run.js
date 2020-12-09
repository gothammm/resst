const concurrently = require('concurrently');

concurrently(
  [
    {
      command: 'node scripts/dev/build.js',
      name: 'build'
    },
    {
      command: 'node server.js',
      name: 'server'
    },
    {
      command: 'npx tsc --noEmit --watch --preserveWatchOutput',
      name: 'typecheck',
    }
  ],
  {
    prefix: 'name',
    killOthers: ['failure', 'success'],
    restartTries: 0
  }
);
