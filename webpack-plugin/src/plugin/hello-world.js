function HelloWorldPlugin (options) {
  console.log(options)
}

HelloWorldPlugin.prototype.apply = function (compiler) {
  // console.log(compiler)
  compiler.plugin('done', function () {
    console.log('hello world')
  })
}

module.exports = HelloWorldPlugin