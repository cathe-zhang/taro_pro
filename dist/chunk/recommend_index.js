(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"121":function(e,t,n){"use strict";n.r(t);var o=n(115),a=n(1),c=n(86),i=n(2),r=n.n(i),l=n(10),s=n(21),u=(n(97),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var p=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"首页"},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,a["a"].Component),u(Index,[{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"componentWillReact","value":function componentWillReact(){console.log("componentWillReact")}},{"key":"componentDidMount","value":function componentDidMount(){var e=this;Object(o.a)({"method":"POST","url":"https://www.easy-mock.com/mock/5ccfd2debe0beb391e751829/zhihu/recommend/list","success":function success(t){console.log(t),e.setState({"list":t.data.data.list})}}).then()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"render","value":function render(){return r.a.createElement(l.a,{"className":"recommend-index-container"},this.state.list&&this.state.list.length>0?r.a.createElement(l.a,{"className":"list"},this.state.list.map(function(e,t){return r.a.createElement(l.a,{"className":"item"},r.a.createElement(l.a,{"className":"left"},r.a.createElement(l.a,{"className":"index"}),r.a.createElement(l.a,{"className":"main"},r.a.createElement(l.a,{"className":"title"},e.title),r.a.createElement(l.a,{"className":"hot"},e.content))))})):null)}}]),Index}();p=c.__decorate([Object(s.b)("counterStore"),s.c],p),t.default=p},"97":function(e,t,n){}}]);