/**

 * Created by Jagger on 16/9/10.
 */

import React, {PureComponent} from "react";
import TabView from "react-native-scrollable-tab-view";
import TabBar from "./components/TabBar";
import HomePage from "./HomePage";
import AccountPage from "./Register";
import ApplyPage from "./ApplyPage";
import MessagePage from "./MessagePage";
import SearchPage from "./SearchPage";

export default class Pages extends PureComponent {
	render() {
		return (
			<TabView
				renderTabBar={() => <TabBar icons={["home", "envelope", "plus-circle", "search"]} />}
				tabBarPosition="bottom"
			>
				<HomePage tabLabel="主页"
					{...this.props}
				/>
				<MessagePage tabLabel="信息"
					{...this.props}
				/>
				<ApplyPage tabLabel="申请贷款"
					{...this.props}
				/>
				<SearchPage tabLabel="搜索"
					{...this.props}
				/>
			</TabView>);
	}
}

Pages.propTypes = {
	navigator: React.PropTypes.object
};
