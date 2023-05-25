/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'pages')],
    includePaths: [path.join(__dirname, 'components')],
    includePaths: [path.join(__dirname, 'app')],
  },
}

module.exports = nextConfig
