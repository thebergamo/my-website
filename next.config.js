// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const withTM = require('next-transpile-modules')(['static-tweets'])

module.exports = withPlugins([withBundleAnalyzer, withTM], {
  images: {
    domains: ['pbs.twimg.com']
  },
  future: {
    webpack5: true
  }
})
