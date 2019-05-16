import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtSearchBar } from 'taro-ui'
import { AtListItem } from 'taro-ui'

import './index.less'

type PageStateProps = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

interface Index {
  props: PageStateProps;
}

@inject('counterStore')
@observer
class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { 
    const self = this
    Taro.request({
      method: 'POST',
      url: 'https://www.easy-mock.com/mock/5ccfd2debe0beb391e751829/zhihu/recommend/list',
      success: function(res){
        console.log(res);
        self.setState({
          list: res.data.data.list
        })
      }
    }).then()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='recommend-index-container'>
        {
          this.state.list && this.state.list.length > 0 ?
          <View className="list">
            {
              this.state.list.map((item,index)=>{
                return (
                  <View className="item">
                    <View className="left">
                      <View className="index"></View>
                      <View className="main">
                        <View className="title">
                          {item.title}
                        </View>
                        <View className="hot">{item.content}</View>
                      </View>
                    </View>
                  </View>
                )
              })
            }
          </View>
          :null
        }
      </View>
    )
  }
}

export default Index  as ComponentType
