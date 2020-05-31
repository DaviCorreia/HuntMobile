import React, {Component} from "react";

import api from "./src/services/api"

import {View, Text} from "react-native";

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
    render(){
        return(
            <View>
                <Text>Página Principal</Text>
                {this.state.docs.map(product => (
                <Text key={product._id}>{product.title}</Text>))}
            </View>
        );
        
    }
}