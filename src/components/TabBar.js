/**
 * Created by Jagger on 16/9/12.
 */
import React, {Component} from "react";
import ReactNative from "react-native";
import Button from "react-native-scrollable-tab-view/Button";
import Icon from "react-native-vector-icons/FontAwesome";
const {
	      View,
	      Animated,
	      StyleSheet,
	      ScrollView,
	      Text,
	      Platform,
	      Dimensions,
      } = ReactNative;


const WINDOW_WIDTH = Dimensions.get("window").width;
export default class TabBar extends Component{

	constructor(props){
		super(props);
		this.state = {
			_leftTabUnderline : new Animated.Value(0),
			_widthTabUnderline: new Animated.Value(0),
			_containerWidth   : null,
		};
		this._tabsMeasurements = [];
	}

	componentDidMount() {
		this.props.scrollValue.addListener(this.updateView.bind(this));
	}

	updateView(offset) {
		const position        = Math.floor(offset.value);
		const pageOffset      = offset.value % 1;
		const tabCount        = this.props.tabs.length;
		const lastTabPosition = tabCount - 1;

		if (tabCount === 0 || offset.value < 0 || offset.value > lastTabPosition) {
			return;
		}

		if (this.necessarilyMeasurementsCompleted(position, position === lastTabPosition)) {
			this.updateTabPanel(position, pageOffset);
			this.updateTabUnderline(position, pageOffset, tabCount);
		}
	}

	necessarilyMeasurementsCompleted(position, isLastTab) {
		return this._tabsMeasurements[position] &&
			(isLastTab || this._tabsMeasurements[position + 1]) &&
			this._tabContainerMeasurements &&
			this._containerMeasurements;
	}

	updateTabPanel(position, pageOffset) {
		const containerWidth      = this._containerMeasurements.width;
		const tabWidth            = this._tabsMeasurements[position].width;
		const nextTabMeasurements = this._tabsMeasurements[position + 1];
		const nextTabWidth        = nextTabMeasurements && nextTabMeasurements.width || 0;
		const tabOffset           = this._tabsMeasurements[position].left;
		const absolutePageOffset  = pageOffset * tabWidth;
		let newScrollX            = tabOffset + absolutePageOffset;

		// center tab and smooth tab change (for when tabWidth changes a lot between two tabs)
		newScrollX -= (containerWidth - (1 - pageOffset) * tabWidth - pageOffset * nextTabWidth) / 2;
		newScrollX = newScrollX >= 0 ? newScrollX : 0;

		if (Platform.OS === "android") {
			this._scrollView.scrollTo({x: newScrollX, y: 0, animated: false,});
		} else {
			const rightBoundScroll = this._tabContainerMeasurements.width - (this._containerMeasurements.width);
			newScrollX             = newScrollX > rightBoundScroll ? rightBoundScroll : newScrollX;
			this._scrollView.scrollTo({x: newScrollX, y: 0, animated: false,});
		}

	}

	updateTabUnderline(position, pageOffset, tabCount) {
		const lineLeft  = this._tabsMeasurements[position].left;
		const lineRight = this._tabsMeasurements[position].right;

		if (position < tabCount - 1) {
			const nextTabLeft  = this._tabsMeasurements[position + 1].left;
			const nextTabRight = this._tabsMeasurements[position + 1].right;

			const newLineLeft  = (pageOffset * nextTabLeft + (1 - pageOffset) * lineLeft);
			const newLineRight = (pageOffset * nextTabRight + (1 - pageOffset) * lineRight);

			this.state._leftTabUnderline.setValue(newLineLeft);
			this.state._widthTabUnderline.setValue(newLineRight - newLineLeft);
		} else {
			this.state._leftTabUnderline.setValue(lineLeft);
			this.state._widthTabUnderline.setValue(lineRight - lineLeft);
		}
	}

	renderTab(name, page, isTabActive, onPressHandler, onLayoutHandler) {
		const {activeTextColor, inactiveTextColor, textStyle,} = this.props;
		const textColor                                        = isTabActive ? activeTextColor : inactiveTextColor;
		const fontWeight                                       = isTabActive ? "bold" : "normal";
		return (
			<Button
				accessibilityLabel={name}
				accessibilityTraits='button'
				accessible
				key={`${name}_${page}`}
				onLayout={onLayoutHandler}
				onPress={() => onPressHandler(page)}
   >
				<View style={[styles.tab, this.props.tabStyle,]}>
					<Icon
						color={textColor}
						name={this.props.icons[page]}
						size={18}
					/>
					<Text style={[{color: textColor, fontWeight,}, textStyle,]}>
						{name}
					</Text>
				</View>
			</Button>
		);
	}

	measureTab(page, event) {
		const {x, width, height,}    = event.nativeEvent.layout;
		this._tabsMeasurements[page] = {left: x, right: x + width, width, height,};
		this.updateView({value: this.props.scrollValue._value,});
	}



	onTabContainerLayout(e) {
		this._tabContainerMeasurements = e.nativeEvent.layout;
		let width                      = this._tabContainerMeasurements.width;
		if (width < WINDOW_WIDTH) {
			width = WINDOW_WIDTH;
		}
		this.setState({_containerWidth: width,});
		this.updateView({value: this.props.scrollValue._value,});
	}

	onContainerLayout(e) {
		this._containerMeasurements = e.nativeEvent.layout;
		this.updateView({value: this.props.scrollValue._value,});
	}

	render() {
		const tabUnderlineStyle = {
			position       : "absolute",
			height         : 4,
			backgroundColor: "navy",
			bottom         : 0,
		};

		const dynamicTabUnderline = {
			left : this.state._leftTabUnderline,
			width: this.state._widthTabUnderline,
		};

		return (
			<View
				onLayout={this.onContainerLayout.bind(this)}
				style={[styles.container, {backgroundColor: this.props.backgroundColor,}, this.props.style,]}
			>
				<ScrollView
					bounces={false}
					directionalLockEnabled
					horizontal
					ref={(scrollView) => {
						this._scrollView = scrollView;
					}}
					scrollsToTop={false}
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
				>
					<View
						onLayout={this.onTabContainerLayout.bind(this)}
						ref={'tabContainer'}
						style={[styles.tabs, {width: this.state._containerWidth,}, this.props.tabsContainerStyle,]}
					>
						{this.props.tabs.map((name, page) => {
							const isTabActive = this.props.activeTab === page;
							const renderTab   = this.props.renderTab || this.renderTab.bind(this);
							return renderTab(name, page, isTabActive, this.props.goToPage, this.measureTab.bind(this, page));
						})}
						<Animated.View style={[tabUnderlineStyle, dynamicTabUnderline, this.props.underlineStyle,]} />
					</View>
				</ScrollView>
			</View>);
	}
}

TabBar.defaultProps = {
	scrollOffset      : 52,
	activeTextColor   : "navy",
	inactiveTextColor : "black",
	backgroundColor   : null,
	style             : {},
	tabStyle          : {},
	tabsContainerStyle: {},
	underlineStyle    : {},
	icons             : []
};

TabBar.propTypes = {
	activeTab         : React.PropTypes.number,
	activeTextColor   : React.PropTypes.string,
	backgroundColor   : React.PropTypes.string,
	goToPage          : React.PropTypes.func,
	icons             : React.PropTypes.array,
	inactiveTextColor : React.PropTypes.string,
	renderTab         : React.PropTypes.func,
	scrollOffset      : React.PropTypes.number,
	scrollValue       : React.PropTypes.any,
	style             : View.propTypes.style,
	tabStyle          : View.propTypes.style,
	tabs              : React.PropTypes.array,
	tabsContainerStyle: View.propTypes.style,
	textStyle         : Text.propTypes.style,
	underlineStyle    : View.propTypes.style,
};

const borderColor = "#ccc";

const styles = StyleSheet.create({
	tab      : {
		height        : 49,
		alignItems    : "center",
		justifyContent: "center",
		paddingLeft   : 20,
		paddingRight  : 20,
	},
	container: {
		height          : 50,
		borderWidth     : 1,
		borderTopWidth  : 0,
		borderLeftWidth : 0,
		borderRightWidth: 0,
		borderColor     : borderColor,
	},
	tabs     : {
		flexDirection : "row",
		justifyContent: "space-around",
	},
});
