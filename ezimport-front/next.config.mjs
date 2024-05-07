/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  webpack(config) {
    // Configure path aliases
    config.resolve.alias["@"] = path.resolve("./src");

    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      },
      // Ignore .map files
      {
        test: /\.map$/,
        use: "ignore-loader",
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};
export default nextConfig;

// experimental: {
//   serverComponentsExternalPackages: ["puppeteer-core", "@sparticuz/chromium"],
// },
