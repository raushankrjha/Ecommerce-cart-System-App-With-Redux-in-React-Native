import React, { Component } from "react";
import {
    View,
    
    StyleSheet,
    
    ScrollView
} from "react-native";

import { Button,Card,Image,ListItem,Text  } from 'react-native-elements';


class Products extends Component {

    renderProducts = (products) => {
       
        return products.map((item, index) => {
            return (
              
                <View key={index}>
                <Card containerStyle={{width:null,height:250}}>
                <Image
                     style={styles.image}
                      source={require('../assets/5.jpeg')}
                  />
                  <Text h4 style={styles.title}>{item.name}</Text>
                  <Text style={styles.price}>{item.price}</Text>

                 <Button  style={{margin:5}}type="outline" onPress={() => this.props.onPress(item)} title="Add to Cart" />

                    </Card>
                </View>
               
            )
        })
    }



    render() {
        return (
            <ScrollView style={styles.container}>
                {this.renderProducts(this.props.products)}
            </ScrollView>
        );
    }
}
export default Products;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        width:null
       
    },
    image:
    {
        justifyContent:"center",
        marginLeft:40,
        marginRight:40,
        width:null,
        height:100,
        margin:3
    },
    title:
    {
        margin:5,
        fontSize:15,
        color:"black"

    },
    price:
    {
        justifyContent:"center",
        color:"red",
        fontWeight:"bold",
        fontSize:15,
        textAlign:"center",


    }
});