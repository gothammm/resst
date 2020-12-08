const esbuild = require('esbuild');

function build() {
  esbuild
    .build({
      define: {
        'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
      },
      entryPoints: ['src/index.tsx'],
      bundle: true,
      outfile: 'dist/bundle.js',
    })
    .then(() => {
      console.log('Done');
    });
}
