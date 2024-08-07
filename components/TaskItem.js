import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/styles";

export default function TaskItem({ title }) {
    return (
        <View style={styles.item}>
            <Text style={styles.item_title}>{title}</Text>
        </View>
    );
}
