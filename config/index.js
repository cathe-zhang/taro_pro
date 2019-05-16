const path = require('path');

const config = {
  projectName: 'zhihu',
  date: '2019-5-6',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
	alias: {
    '~/': path.resolve(__dirname, '..', 'src/'),
		'~/assets': path.resolve(__dirname, '..', 'src/assets'),
		'~/pages': path.resolve(__dirname, '..', 'src/pages'),
		'~/widgets': path.resolve(__dirname, '..', 'src/widgets'),
		'~/config': path.resolve(__dirname, '..', 'src/config'),
		'~/constants': path.resolve(__dirname, '..', 'src/constants'),
		'~/enums': path.resolve(__dirname, '..', 'src/enums'),
		'~/interceptors': path.resolve(__dirname, '..', 'src/interceptors'),
		'~/interfaces': path.resolve(__dirname, '..', 'src/interfaces'),
		'~/models': path.resolve(__dirname, '..', 'src/models'),
		'~/services': path.resolve(__dirname, '..', 'src/services'),
		'~/utils': path.resolve(__dirname, '..', 'src/utils'),
	},
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: {
    babel: {
      sourceMap: true,
      presets: [
        ['env', {
          modules: false
        }]
      ],
      plugins: [
        'transform-decorators-legacy',
        'transform-class-properties',
        'transform-object-rest-spread'
      ]
    }
  },
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: [
              'last 3 versions',
              'Android >= 4.1',
              'ios >= 8'
            ]
          }
        },
        pxtransform: {
          enable: true,
          config: {

          }
        },
        url: {
          enable: true,
          config: {
            limit: 10240 // 设定转换尺寸上限
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
		router: {
			mode: 'browser' // 或者是 'hash'
		},
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: [
              'last 3 versions',
              'Android >= 4.1',
              'ios >= 8'
            ]
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    },
    esnextModules: ['taro-ui']  // https://taro-ui.aotu.io/#/docs/quickstart 由于引用 `node_modules` 的模块，默认不会编译，所以需要额外给 H5 配置 `esnextModules`，在 taro 项目的 `config/index.js` 中新增如下配置项：
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
