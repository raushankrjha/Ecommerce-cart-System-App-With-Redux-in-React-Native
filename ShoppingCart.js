import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { createStackNavigator,createAppContainer } from 'react-navigation';
import HomeScreen from './containers/HomeScreen'
import FrontEndScreen from './containers/FrontEndScreen'
import PythonScreen from './containers/PythonScreen'
import ShoppingCartIcon from './containers/ShoppingCartIcon'
import CartScreen from './containers/CartScreen'
class ShoppingCart extends Component {
    render() {
        return (
            <AppStackNavigator />
        );
    }
}
const AppStackNavigator = createStackNavigator({
    Home: HomeScreen,
    FrontEnd: FrontEndScreen,
    Python: PythonScreen,
    Cart: CartScreen
},)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
const AppContainer = createAppContainer(AppStackNavigator)
export default AppContainer;