import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import { AtListItem } from 'taro-ui'

class Index extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={
    list: [
      {
        title: '购物车item',
        arrow: 'right',
        jumpRoute: '/pages/widgets/listItem/cartItem'
      },
      {
        title: '数字跳跃',
        arrow: 'right',
        jumpRoute: '/pages/widgets/timeBounce/index'
      },
    ]
  }

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 

  // item点击事件
  handleItemClick = ( url ) => {
    Taro.navigateTo({url})
  }
  
  render() {
    const { list } = this.state
    return (
      <View>
        {
          list.map((item,index)=>{
            return (
              <AtListItem 
                title={item.title}
                arrow={item.arrow}
                onClick={this.handleItemClick.bind(this, item.jumpRoute)}
              />
            )
          })
        }
      </View>
    );
  }
}
export default Index;