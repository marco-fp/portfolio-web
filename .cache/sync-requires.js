// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/marcofp/Documents/github/portfolio-web/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/marcofp/Documents/github/portfolio-web/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/marcofp/Documents/github/portfolio-web/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/marcofp/Documents/github/portfolio-web/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/home/marcofp/Documents/github/portfolio-web/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/home/marcofp/Documents/github/portfolio-web/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/home/marcofp/Documents/github/portfolio-web/.cache/json/layout-index.json"),
  "404.json": require("/home/marcofp/Documents/github/portfolio-web/.cache/json/404.json"),
  "layout-index.json": require("/home/marcofp/Documents/github/portfolio-web/.cache/json/layout-index.json"),
  "index.json": require("/home/marcofp/Documents/github/portfolio-web/.cache/json/index.json"),
  "layout-index.json": require("/home/marcofp/Documents/github/portfolio-web/.cache/json/layout-index.json"),
  "404-html.json": require("/home/marcofp/Documents/github/portfolio-web/.cache/json/404-html.json")
}