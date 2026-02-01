const flattenCascadeLayers = () => ({
  postcssPlugin: "flatten-cascade-layers",
  AtRule: {
    layer(atRule) {
      if (atRule.nodes && atRule.nodes.length > 0) {
        atRule.replaceWith(atRule.nodes);
      } else {
        atRule.remove();
      }
    },
  },
});
flattenCascadeLayers.postcss = true;

const config = {
  plugins: ["@tailwindcss/postcss", flattenCascadeLayers()],
};

export default config;
