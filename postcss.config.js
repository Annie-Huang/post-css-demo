module.export = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({stage: 1}),
    require('cssnano'),
  ]
}
