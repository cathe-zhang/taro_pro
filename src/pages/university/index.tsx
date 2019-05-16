import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';

class Index extends Component {

   config = {
       navigationBarTitleText: '大学'
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
      <View>
        大学
      </View>
    );
  }
}
export default Index;