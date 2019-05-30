import React, { Component } from "react";
import {
    ScrollView,
    Text,
    StyleSheet,
    Button,Image
} from "react-native";
import { PricingCard,Card } from 'react-native-elements';
import ShoppingCartIcon from './ShoppingCartIcon'
class HomeScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Course Category',
          headerRight: (
            <ShoppingCartIcon />
          ),
        };
      };
    render() {
        return (
            <ScrollView style={styles.container}>
            <Card containerStyle={{width:null,height:300}}  title="Python">
                        <Image
                            style={styles.image}
                                source={require('../assets/code.jpeg')}
                        />
                       <Button title="Open" onPress={() => this.props.navigation.navigate('Python')} />
             </Card>
             <Card containerStyle={{width:null,height:250}}  title="Back-End Course">
                    <Image
                            style={styles.image}
                            source={require('../assets/python.jpeg')}
                        />
                 <Button title="Open" onPress={() => this.props.navigation.navigate('FrontEnd')} />
            </Card>
            <Card containerStyle={{width:null,height:250}}  title="Full-Stack-Development">
                 <Image
                        style={styles.image}
                        source={require('../assets/node.jpeg')}
                    />
                  <Button title="Open" onPress={() => this.props.navigation.navigate('Cart')} />
            </Card>
            
         </ScrollView>
          
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
        flexDirection:"column"
        
    },
    image:
    {
        justifyContent:"center",
       
        width:null,
        height:150,
        margin:5
    },
});