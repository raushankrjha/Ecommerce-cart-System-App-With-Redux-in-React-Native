import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Products from '../components/Products'
import { connect } from 'react-redux'
class CartScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Cart ',
         
        };
      };
    render() {
        console.log(this.props.cartItems)

        return (
            <View style={styles.container}>
                {this.props.cartItems.length > 0 ?
                    <Products
                        onPress={this.props.removeItem}
                        products={this.props.cartItems} />
                    : <Text>No items Available in your cart</Text>
                }
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product) => dispatch({ type: 'REMOVE__ITEM', payload: product })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});