import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';

class Index extends Component {

   config = {
       navigationBarTitleText: '想法'
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
        想法
      </View>
    );
  }
}
export default Index;