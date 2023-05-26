/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.python.org',
        
      },   
      {
        protocol: 'https',
        hostname: 'www.javascript.com',
        
      },   
      {
        protocol: 'https',
        hostname: 'www.cplusplus.com',
        
      },   
      {
        protocol: 'https',
        hostname: 'www.java.com/en/',
        
      },   
      {
        protocol: 'https',
        hostname: 'www.wikimedia.org',
        
      },   
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        
      },          
    ],
  },
}