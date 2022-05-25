const isProd = process.argv.includes("--production");
const isDev = !isProd;
module.exports = {
  isProd: isProd,
  isDev: isDev,
  htmlmin: {
    collapseWhitespace: isProd
  },
  imagemin: {
    verbose: true
  },
  svgOptions: {
    plugins: [
      {
        removeViewBox: false
      },
      {
        removeTitle: true
      },
      {
        cleanupNumericValues: {
          floatPrecision: 2
        }
      },
      {
        cleanupNumericValues: {
          floatPrecision: 2
        }
      },
      {
        convertPathData: {
          floatPrecision: 2
        }
      },
      {
        transformsWithOnePath: {
          floatPrecision: 2
        }
      },
      {
        convertTransform: {
          floatPrecision: 2
        }
      },
      {
        cleanupListOfValues: {
          floatPrecision: 2
        }
      }
    ]
  },
  jpegOptions: {quality: 80, progressive: true}
}
