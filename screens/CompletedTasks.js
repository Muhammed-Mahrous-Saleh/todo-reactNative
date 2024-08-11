import React, { useState } from "react";
import { Modal, Pressable, SafeAreaView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Todos from "../components/Todos";
import { styles } from "../styles/styles";

export default function CompletedTasks() {
    const {
        todos: dataList,
        loading,
        error,
    } = useSelector((state) => state.todo);
    const filteredData = dataList.filter((res) => res.status === "2");

    if (filteredData.length === 0) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text>No Completed Tasks</Text>
            </View>
        );
    } else {
        return (
            <SafeAreaView style={styles.container}>
                <Todos selectedFilter={"0"} />
            </SafeAreaView>
        );
    }
}
