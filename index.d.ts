declare module 'vite-svg-loader' {
  import { Plugin } from 'vite'
  function svgLoader(options?: { svgoConfig?: Object }): Plugin
  export default svgLoader
}

declare module '*.svg' {
  import { Component } from 'vue'
  const src: Component
  export default src
}
