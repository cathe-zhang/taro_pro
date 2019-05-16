import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

export default class ComponentName extends Component {

	constructor(props) {
		super(props);
		this.interval = null;
	}

	config = {
		navigationBarTitleText: '蜜仓'
	};

	state = {
		bounceNumber: 0,  // 页面展示值
		targetNumber: 2000,  // 最终需要跳到的数字
		duration: 2000,   // 过渡时间 ms
	};

	componentDidMount() {
		const self = this;
		this.interval = setInterval(() => {
			if (this.state.bounceNumber >= 2000) {
				clearInterval(this.interval);
			}
			else {
				self.setState({
					bounceNumber: self.state.bounceNumber + 10
				});
			}
		}, this.state.targetNumber / this.state.duration);
	}

	render() {
		const { bounceNumber } = this.state;
		return (
			<View className='container' >
				<Text>{bounceNumber}</Text>
			</View >
		);
	}
}