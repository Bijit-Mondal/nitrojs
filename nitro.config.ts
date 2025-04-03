//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  compatibilityDate: "2025-04-02",
  preset: "firebase_app_hosting",
  moduleSideEffects: ["firebase-admin", "firebase-functions"],
  //  output: {
  //  dir: 'dist',
  //  publicDir: 'dist/public',
  //  serverDir: 'dist/server'
  //}
});
