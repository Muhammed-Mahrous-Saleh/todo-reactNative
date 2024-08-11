import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";
import uuid from "react-native-uuid";
import { addTodo } from "../redux/slices/todo.slice";
import { useDispatch } from "react-redux";

export default function AddForm({}) {
    const [titleText, setTitleText] = React.useState("");
    const [descText, setDescText] = React.useState("");
    const dispatch = useDispatch();

    const handleAddTask = (todo) => {
        dispatch(addTodo(todo));
    };
    return (
        <View style={{ display: "flex", gap: 15 }}>
            <TextInput
                style={styles.input}
                placeholder={"Task Title"}
                onChangeText={(newText) => setTitleText(newText)}
                defaultValue={titleText}
            />
            <TextInput
                style={styles.input}
                placeholder={"Task Description"}
                onChangeText={(newText) => setDescText(newText)}
                defaultValue={descText}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    setTitleText("");
                    setDescText("");
                    return handleAddTask({
                        id: uuid.v4(),
                        title: titleText,
                        comment: descText,
                        status: "1",
                    });
                }}
            >
                <Text>Add Task</Text>
            </TouchableOpacity>
        </View>
    );
}
