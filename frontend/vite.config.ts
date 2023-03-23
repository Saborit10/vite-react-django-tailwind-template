import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  build: { manifest: true },
  base: process.env.mode === "production" ? "/static/" : "/",
  server: {
    port: 3000,
  },
  // root: ".",
});

// import { defineConfig } from "vite";
// import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
// export default defineConfig({
//
//   base: process.env.mode === "production" ? "/static/" : "/",
//   root: "./src",
//   plugins: [reactRefresh()],
//   server: {
//     port: 3000,
//   },
// });
