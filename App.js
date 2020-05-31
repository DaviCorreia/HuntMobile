import React, {Component} from "react";

import api from "./src/services/api"

import {View, Text, FlatList, TouchableOpacity, StyleSheet} from "react-native";

export default class Main extends Component{

    static navegationOptions = {
        title: "JSHunt"
    };
    state = {
        docs:[],
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async() =>{
        const response = await api.get('/products');

        const {docs} = response.data;

        this.setState({docs});
    };

    renderItem = ({item}) =>(
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>

            <TouchableOpacity style={styles.productButton}onPress={()=>{}}>
                <Text style={styles.productButtonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    );

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.docs}
                    keyExtractor={item =>item._id}
                    renderItem={this.renderItem}
                />
                
            </View>
        );
        
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"purple"
    },
    list:{
        padding:25,
    },
    productContainer:{
        backgroundColor:"white",
        borderWidth:1,
        borderColor:"pink",
        borderRadius:5,
        padding:20,
        marginBottom:20
    },
    productTitle:{
        fontSize:18,
        color:"black",
        fontWeight:"bold",
    },
    productDescription:{
        fontSize:16,
        color:"gray",
        marginTop:5,
        lineHeight:24,
    },
    productButton:{
        height:42,
        borderRadius:5,
        borderWidth:2,
        borderColor:"purple",
        backgroundColor:"transparent",
        justifyContent:"center",
        alignItems:"center",
        marginTop:10,
    },
    productButtonText:{
        fontSize:16,
        color:"purple",
        fontWeight:"bold",
    }
});