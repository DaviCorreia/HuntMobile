import {createStackNavigator} from "react-navigation";

import Main from "../App";

export default createStackNavigator({
    Main,
},{
    navigationOptions:{
        headerStyle:{
            backgroundColor: "blue"
        },
        headerTintColor:"white"
    }
});