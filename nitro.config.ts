//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  compatibilityDate: "2025-04-02",
    output: {
    dir: 'dist',
    publicDir: 'dist/public',
    serverDir: 'dist/server'
  }
});
