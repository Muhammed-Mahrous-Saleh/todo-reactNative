import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const TodoDetails = () => {
    const navigation = useNavigation();
    const { todo } = useRoute().params;

    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Task Title: {todo.title}</Text>
            <Text>Task Comment: {todo.comment}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text>To Home</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TodoDetails;
