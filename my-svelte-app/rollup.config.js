import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import livereload from 'rollup-plugin-livereload';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/build/bundle.js'
    },
    plugins: [
        svelte({
            // enable run-time checks when not in production
            dev: !production,
            // extract CSS into a separate file (recommended)
            css: css => {
                css.write('public/build/bundle.css');
            }
        }),

        // resolve modules from node_modules
        resolve({
            browser: true,
            dedupe: ['svelte']
        }),
        commonjs(),

        // minify the bundle in production
        production && terser(),

        // livereload for development
        !production && livereload('public')
    ],

    watch: {
        clearScreen: false
    }
};