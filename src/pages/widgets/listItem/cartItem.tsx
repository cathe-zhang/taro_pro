import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import CartItem from './../../../widgets/listItem/cartItem'
import { AtNavBar } from 'taro-ui'
import './cartItem.less'

class Index extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={}

  handleBack = () => {
    Taro.navigateBack()
  }

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 

  handleNumberMinus = () => {
    console.log('minus');
  }

  handleNumberPlus = () => {
    console.log('plus');
  }
  
  render() {
    return (
      <View>
        <AtNavBar
          onClickLeftIcon={this.handleBack}
          color='#000'
          title='购物车item组件'
          leftIconType='chevron-left'
        />
        <CartItem 
          goodsImg={'https://avatars3.githubusercontent.com/u/8897063?s=460&v=4'}
          goodsName="商品名称商品名称商品名称商品名称商品名" 
          topJsx={<View>这是一个jsx</View>}
          price={'5.22'}
          originalPrice={'10.00'}
          sku={['型号111', '规格222']}
          count={2}
          handleNumberMinus={this.handleNumberMinus}
          handleNumberPlus={this.handleNumberPlus}
        />
      </View>
    );
  }
}
export default Index;