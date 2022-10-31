const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, 'scss'),
      path.join(__dirname, 'componentsvariables.module.scss'),
    ],
  },
};

module.exports = nextConfig;
