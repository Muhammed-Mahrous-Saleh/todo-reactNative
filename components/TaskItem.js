import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { markAsDone, removeTodo } from "../redux/slices/todo.slice";

export default function TaskItem({ todo, handleDelete }) {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleCheck = () => {
        dispatch(markAsDone(todo.id));
    };
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("TodoDetails", { todo })}
            style={{
                marginVertical: 4,
                width: "100%",
                borderWidth: 1,
                borderBlockColor: "grey",
                borderRadius: 5,
                paddingHorizontal: 10,
                paddingVertical: 5,
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            <View>
                <Text
                    style={{
                        fontSize: 22,
                        fontWeight: "bold",
                        textDecorationLine:
                            todo.status === "2" ? "line-through" : "none",
                    }}
                >
                    {todo.title}
                </Text>
                <Text
                    style={{
                        textDecorationLine:
                            todo.status === "2" ? "line-through" : "none",
                    }}
                >
                    {todo.comment}
                </Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    gap: 15,
                    alignItems: "center",
                }}
            >
                <MaterialCommunityIcons
                    name={
                        todo.status === "2"
                            ? "checkbox-marked"
                            : "checkbox-blank-outline"
                    }
                    size={20}
                    color={todo.status === "2" ? "green" : "gray"}
                    onPress={() => handleCheck(todo)}
                />
                {handleDelete ? (
                    <MaterialCommunityIcons
                        name="trash-can"
                        size={20}
                        color="red"
                        onPress={() => handleDelete(todo)}
                    />
                ) : null}
            </View>
        </TouchableOpacity>
    );
}
