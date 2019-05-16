import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import './index.less'

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
  render() {
    return (
      <View className='actions-area'>
        <View className='action-btn'
          onClick={this.props.handleNumberMinus}
        >
          -
        </View>
        <View className='action-display-box'>{this.props.count}</View>
        <View className='action-btn'
          onClick={this.props.handleNumberPlus}
        >
          +
        </View>
      </View>
    );
  }
}
export default Index;