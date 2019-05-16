import Taro , { Component } from '@tarojs/taro';
import { View, Text, Image, Button} from '@tarojs/components';
import Price from './../../widgets/price/price'
import './cartItem.less'
import NumberSelector from './../../widgets/numberSelector/index'

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
      <View className='goods-item' >
				<View className='goods-item-inner' >
					<View className='left'>
            <View className={`select-icon 'selected'}`}
            
						>
							<View className='inner'></View>
						</View>
						<Image className='goods-img'
							src={this.props.goodsImg}
						/>
					</View>
					<View className='right'>
						<View className='right-inner'>
							<View className='goods-name' >
								{this.props.goodsName}
							</View>
							<View className='goods-type'>
								型号：{this.props.sku[0]} 规格：{this.props.sku[1]}
							</View>
							<View className='price-n-actions'>
								<View className='price-area'>
									<View className='price-top'></View>
									<View className='price-bottom'>
										<View className='price-bottom-left'>
											<Price price={this.props.price} size='sm' color='#ED2756' />
											<View className='original-price'>
                        {this.props.originalPrice}
											</View>
										</View>
                    <NumberSelector 
                      count={this.props.count}
                      handleNumberMinus={this.props.handleNumberMinus}
                      handleNumberPlus={this.props.handleNumberPlus}
                    />
									</View>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
    );
  }
}
export default Index;