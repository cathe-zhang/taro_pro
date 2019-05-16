import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'

import counterStore from './store/counter'

import './app.less'
import 'taro-ui/dist/style/index.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
}

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/zIndex/index',
      'pages/thought/index',
      'pages/university/index',
      'pages/notice/index',
      'pages/users/index',
      'pages/recommend/index',
      'pages/widgets/index',
      'pages/widgets/listItem/cartItem',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
			color: '#969BA0',
			selectedColor: '#333333',
			backgroundColor: '#ffffff',
			list: [
				{
					iconPath: 'assets/images/icon/tabBar/mc_lable_home_default@2x.png',
					selectedIconPath:
						'assets/images/icon/tabBar/mc_lable_home_selected@2x.png',
					pagePath: 'pages/zIndex/index',
					text: '首页'
				},
				{
					iconPath: 'assets/images/icon/tabBar/mc_lable_my_defaule@2x.png',
					selectedIconPath:
						'assets/images/icon/tabBar/mc_lable_my_selected@2x.png',
					pagePath: 'pages/recommend/index',
					text: '为你推荐'
        },
        {
					iconPath: 'assets/images/icon/tabBar/mc_lable_my_defaule@2x.png',
					selectedIconPath:
						'assets/images/icon/tabBar/mc_lable_my_selected@2x.png',
					pagePath: 'pages/widgets/index',
					text: 'taro组件'
				},
			]
		}
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
