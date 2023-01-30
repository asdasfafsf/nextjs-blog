module.exports = {
    env: {
      customKey: 'my-value',
    },
    async rewrites() {
        return [
          {
            source: '/about/:slug*',
            destination: '/',
            has: [{type: 'query', key: 'test', value: 'rewrite'}]
          },
        ]
      },
    async redirects() {
        return [
          {
            source: '/aboutme',
            destination: '/',
            permanent: true,
          },
        ]
    },
    serverRuntimeConfig: {
        // Will only be available on the server side
        mySecret: 'secret',
        // secondSecret: process.env.SECOND_SECRET, // Pass through env variables
      },
      publicRuntimeConfig: {
        // Will be available on both server and client
        staticFolder: '/static',
      },
}