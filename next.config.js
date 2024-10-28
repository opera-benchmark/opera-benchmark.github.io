const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
});

module.exports = withNextra({
  experimental: {
    images: {
      allowFutureImage: true,
      unoptimized: true
    },
  },
  images: {
    unoptimized: true
  },
  redirects: () => {
    return [

    ];
  },
});