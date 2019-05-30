import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Products from '../components/Products'
import { front } from '../Item'
import { connect } from 'react-redux'
import ShoppingCartIcon from './ShoppingCartIcon'
class FronEndScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Front-End ',
          headerRight: (
            <ShoppingCartIcon />
          ),
        };
      };
    render() {
        return (
            <View style={styles.container}>
                <Products products={front} onPress={this.props.addItemToCart} />
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_ITEM', payload: product })
    }
}

export default connect(null, mapDispatchToProps)(FronEndScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});