const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");

function copyIndexHtml() {
  const source = path.join(__dirname, "../index.html");
  const destination = path.join(__dirname, "../dist/index.html");
  return fs.copyFileSync(source, destination);
}

function buildTS() {
  return esbuild.build({
    define: {
      "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`,
    },
    entryPoints: ["src/index.tsx"],
    bundle: true,
    sourcemap: true,
    outfile: "dist/bundle.js",
  });
}

(async () => {
  await buildTS();
  copyIndexHtml();
})();
