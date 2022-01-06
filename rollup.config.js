import path from 'path';
import postcss from 'rollup-plugin-postcss';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default [
  {
    input: 'src/index.js',
    output: [
      {
        format: 'esm',
        file: 'dist/vuerial.mjs',
      },
      {
        format: 'cjs',
        file: 'dist/vuerial.js',
      }
    ],
    plugins: [
      postcss({
        extensions: ['.css'],
        extract: path.resolve('dist/vuerial.css'),
        modules: true,
        config: {
          path: 'postcss.config.js'
        },
      }),
      nodeResolve(),
      commonjs({
        include: /node_modules/
      }),
      vue(),
      peerDepsExternal(),
    ],
  }
];
