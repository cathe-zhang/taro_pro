import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import { AtListItem } from 'taro-ui'

class Index extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={}

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
    return (
      <View>
        <AtListItem 
          title="购物车item"
          arrow="right"
          onClick={this.handleItemClick.bind(this, '/pages/widgets/listItem/cartItem')}
        />
      </View>
    );
  }
}
export default Index;