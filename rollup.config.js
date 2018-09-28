import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";

export default [
	{
		input: "src/index.js",
		plugins: [babel({ exclude: "node_modules/**" })],
		output: {
			format: "es",
			freeze: false,
			exprots: "named",
			interop: false,
			sourcemap: true,
			file: "./dist/hammer.esm.js",
		},
	},
	{
		input: "src/index.umd.js",
		plugins: [babel({ exclude: "node_modules/**" })],
		output: {
			format: "umd",
			name: "Hammer",
			exports: "default",
			freeze: false,
			interop: false,
			sourcemap: true,
			file: "./dist/hammer.js",
		},
	},
	{
		input: "src/index.umd.js",
		plugins: [babel({ exclude: "node_modules/**" }), uglify({ sourcemap: true })],
		output: {
			format: "umd",
			name: "Hammer",
			exports: "default",
			freeze: false,
			interop: false,
			sourcemap: true,
			file: "./dist/hammer.min.js",
		},
	},
];
