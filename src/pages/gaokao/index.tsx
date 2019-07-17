import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, ScrollView } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtSearchBar } from 'taro-ui'

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

	state = {
		list: []
	}

	componentWillMount() { }

	componentWillReact() {
		console.log('componentWillReact')
	}

	componentDidMount() {
		this.queryDataList()
	}

	// 获取数据列表
	queryDataList = () => {
		const self = this
		Taro.request({
			method: 'POST',
			url: 'https://api.eol.cn/gkcx/api/?access_token=&keyword=%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6%E4%B8%8E%E6%8A%80%E6%9C%AF&level1=&local_batch_id=&local_province_id=43&local_type_id=1&page=1&province_id=43&recom=0&score=497&signsafe=&size=20&uri=apidata/api/gk/recomScore/special',
			success: function (res) {
				console.log(res);
				// self.setState({
				//   list: self.state.list.concat(res.data.data.list)
				// })
			}
		})
	}

	// scrollview 滚动
	onScroll = () => {
		console.log('scroll');
	}

	// scrollView滚动到底部
	scrollToBottom = () => {
		console.log('滚动到底部');
		this.queryDataList()
	}

	render() {
		const { counterStore: { counter } } = this.props
		return (
			<View className='index-container'>
				<View className="search-bar">
					<AtSearchBar />
				</View>

				<ScrollView
					className='scrollview'
					scrollY
					scrollWithAnimation
					lowerThreshold={50}
					onScroll={this.onScroll}
					onScrollToLower={this.scrollToBottom}
				>
					{
						this.state.list && this.state.list.length > 0 ?
							<View className="list">
								{
									this.state.list.map((item, index) => {
										return (
											<View className="item">
												<View className="left">
													<View className="index"></View>
													<View className="main">
														<View className="title">
															{item.title}
														</View>
														<View className="hot">{item.hot}热度</View>
													</View>
												</View>
												<View className="image">

												</View>
											</View>
										)
									})
								}
							</View>
							: null
					}
				</ScrollView>
			</View>
		)
	}
}

export default Index as ComponentType
