// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     typescript: {
//         ignoreBuildErrors: true,
//       },
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
