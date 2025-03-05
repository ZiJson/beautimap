import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  format: ["esm"],
  sourcemap: true,
  minify: true,
  target: "esnext",
  outDir: "dist",
  treeshake: true,
  external: [
    "react", // 外部化 React 依赖
    "react-dom", // 如果有用到 react-dom 也可以加上
    "@react-google-maps/api",
  ],
  splitting: true, // 开启代码拆分
  esbuildOptions(options) {
    options.treeShaking = true; // 确保 Tree Shaking 生效
  },
});
