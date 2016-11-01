import {Platform, BackAndroid, ToastAndroid, NativeModules} from "react-native";

// 类
var NativeCommonTools = NativeModules.CommonTools;

export default {
	// 监听返回键事件
	addBackAndroidListener(navigator) {
		if (Platform.OS === "android") {
			BackAndroid.addEventListener("hardwareBackPress", () => {
				return this.onBackAndroid(navigator);
			});
		}
	},

	// 移除监听
	removeBackAndroidListener() {
		if (Platform.OS === "android") {
			BackAndroid.removeEventListener("hardwareBackPress", () => {
			});
		}
	},

	// 判断是返回上一页还是退出程序
	onBackAndroid(navigator) {
		if (!navigator) return false;
		const routers = navigator.getCurrentRoutes();
		// 当前页面不为root页面时的处理
		if (routers.length > 1) {
			// 默认行为： 退出当前界面。
			navigator.pop();
			return true;
		}
		// 当前页面为root页面时的处理
		if (this.lastBackPressed && (this.lastBackPressed + 2000 >= Date.now())) {
			//最近2秒内按过back键，可以退出应用。
			NativeCommonTools.exitApp();
			return true;
		}
		this.lastBackPressed = Date.now();
		ToastAndroid.show("再按一次退出应用", ToastAndroid.SHORT);
		return true;
	},

	// 自定义返回按钮事件
	customHandleBack(navigator, handleBack) {
		if (navigator) {
			let routes           = navigator.getCurrentRoutes(); //nav是导航器对象
			let lastRoute        = routes[routes.length - 1]; // 当前页面对应的route对象
			lastRoute.handleBack = handleBack;
		}
	},

};
