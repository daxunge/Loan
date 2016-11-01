// # /**
// #  * Sample React Native App
// #  * https://github.com/facebook/react-native
// #  * @flow
// #  */
// #
// # import React, {Component} from 'react';
// # import {AppRegistry, Navigator} from 'react-native';
// #
// #
// # let pages = {
// #   Pages: require('./src/Pages').default,
// #   ManagePage: require('./src/Manage').default
// # };
// #
// #
// # var p = require('./src/Pages');
// #
// # class Loan extends Component {
// #   pushView(navigator, route, title){
// #     navigator.push({
// #       title: title,
// #       index: route.index + 1
// #     })
// #   }
// #   render() {
// #     return <Navigator
// #         initialRoute={{ title: 'Pages', index: 0 }}
// #         renderScene={(route, navigator) =>{
// #           let Page = pages[route.title];
// #           return <Page push={this.pushView.bind(null, navigator, route)}/>
// #         }
// #         }
// #     />
// #   }
// # }
// #
// # AppRegistry.registerComponent('Loan', () => Loan);
// # this.pushView.bind(null, navigator, route)} />;
// #         }
// #         }
// #                     />;
// #   }
// # }
// #
// # AppRegistry.registerComponent("Loan", () => Loan);
