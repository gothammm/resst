const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

function copyIndexHtml() {
  const source = path.join(__dirname, '../index.html');
  const destination = path.join(__dirname, '../dist/index.html');
  return fs.copyFileSync(source, destination);
}

module.exports = {
  preBuild: () => {
    copyIndexHtml();
  },
  build: ({
    entryPoints = ['src/index.tsx'],
    outfile = 'dist/bundle.js',
    incremental = false
  }) => {
    const isProd = process.env.NODE_ENV === 'production';
    return esbuild.build({
      logLevel: 'error',
      define: {
        'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
      },
      bundle: !isProd,
      sourcemap: !isProd,
      entryPoints,
      outfile,
      incremental
    });
  }
};
