const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  /**
   * Symbolic Links in node_modules
   * @see {@link https://cli.vuejs.org/guide/troubleshooting.html#running-installation-with-sudo-or-as-root}
   */
  chainWebpack: (config) => {
    config.resolve.symlinks(false);
  },
  transpileDependencies: true,
});
