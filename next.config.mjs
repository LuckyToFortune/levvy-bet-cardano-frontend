/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: function (config, options) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };
    config.watchOptions = {
      poll: 1000, // Check for changes every second (useful for Docker or VM)
      aggregateTimeout: 300, // Delay rebuild after the first change
    };
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  env: {
    blockfrostApiKeyMainnet: "mainnet1af9PVWL7z247tKKMpPoVUgXUsEa42k7",
    blockfrostApiKeyPreprod: "preprod1g9LmntPYF2qcqdCu8iQyLNXUj4j9Xti",
  },
};

export default nextConfig;
