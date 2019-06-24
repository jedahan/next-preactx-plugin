
# next-preactx-plugin

NextJS Plugin for PreactX. This will not be compatible with `preact` 8.4.x and is intended to be used with `preact`>10.0.0.

# Installation
```
 yarn add next-preactx-plugin
```
Or if you're using NPM:
```
npm install --save next-preactx-plugin
```
You can add the other plugins on your own, but since they're all dependencies on this plugin you will not need to import `react`, `react-dom`, `preact`, `preact-ssr-preass`, or `preact-render-to-string` on your main project.
# Usage

Create a `next.config.js` file in your project directory:
```
// next.config.js
const withPreact = require('@next-preactx-plugin')
module.exports = withPreact({
  /* config options here */
})
```

In your `package.json` file in your project directory, add the following section:
```
"_moduleAliases": {
"react": "node_modules/preact/compat",
"react-dom": "node_modules/preact/compat",
"react-ssr-prepass": "node_modules/preact-ssr-prepass"
}
```

Create a `server.js` file in your project directory:
```
// server.js
require('@next-preactx-plugin/alias')()
const { createServer } = require('http')
const next = require('next')

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const port = process.env.PORT || 3000
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  createServer(handle)
  .listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
```

Optionally you can add your custom Next.js configuration as parameter

```
// next.config.js
const withPreact = require('next-preact-plugin')
module.exports = withPreact({
  webpack(config, options) {
    return config
  }
})
```