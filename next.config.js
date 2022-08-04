/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options)=>{
    if (!options.isServer){
      config.module.rules.push({
        test: /googleapis/,
        use: 'null-loader'
      })
    }
    return config
  }
}

module.exports = nextConfig
