import {createStackNavigator} from "react-navigation";

import Main from "../App";

import Product from "../src/product"

export default createStackNavigator({
    Main,Product
},
{
    navigationOptions:{
        headerStyle:{
            backgroundColor: "blue"
        },
        headerTintColor:"white"
    }
});