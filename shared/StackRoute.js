import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoDetails from "../screens/TodoDetails";
import Home from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoute = () => {
    return (
        <Navigator>
            <Screen name="Home" component={Home} />
            <Screen
                name="TodoDetails"
                options={{
                    title: "TODO DETAILS",
                }}
                component={TodoDetails}
            />
        </Navigator>
    );
};

export default StackRoute;
