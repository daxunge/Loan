/**
 * Created by Jagger on 16/9/13.
 */
export default class CustomNavigator {

	constructor(navigator) {
		this.push = function push(title) {
			return navigator.push.bind(navigator,{
				title: title
			});
		};
		this.pop = navigator.pop;
	}
}
