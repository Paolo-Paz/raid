require('esbuild').buildSync({
    entryPoints: ['default-service/lib/index.js'],
    bundle: true,
    platform: 'node',
    minify: true,
    sourcemap: true,
    target: ['chrome100'],
    outfile: 'default-service/website/index.js',
    globalName: 'raid',
    format: "iife"
  });
