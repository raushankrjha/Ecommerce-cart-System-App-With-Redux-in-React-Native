import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import ShoppingCartIcon from './ShoppingCartIcon'
import { python } from '../Item'
import Products from '../components/Products'
import { connect } from 'react-redux'

class PythonScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Python ',
          headerRight: (
            <ShoppingCartIcon />
          ),
        };
      };

    render() {
        return (
            <View style={styles.container}>
                <Products products={python} onPress={this.props.addItemToCart} />
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_ITEM', payload: product })
    }
}
export default connect(null, mapDispatchToProps)(PythonScreen);

const styles = StyleSheet.create({
    container: {
        width:null,
        height:null,
        flex: 1,
       
    }
});