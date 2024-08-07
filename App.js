import { StatusBar } from "expo-status-bar";
import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
} from "react-native";
import InputField from "./components/InputField";
import { styles } from "./styles/styles";
import TaskItem from "./components/TaskItem";
import { DATA } from "./data/db";
import FilterOptions from "./components/FilterOptions";
import { useState } from "react";

export default function App() {
    const handleFilterSelect = (id) => {
        setSelectedFilter(id);
    };
    const [selectedFilter, setSelectedFilter] = useState("0");
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>TODO App</Text>
                {/* <Text>Open up App.js to start working on your app!</Text>
<StatusBar style="auto" /> */}
                <InputField placeholder={"Task Title"} />
                <InputField placeholder={"Task Description"} />
                <TouchableOpacity style={styles.button}>
                    <Text>Add Task</Text>
                </TouchableOpacity>
                <View style={styles.divider} />
                <FilterOptions
                    handleFilterSelect={handleFilterSelect}
                    selectedFilter={selectedFilter}
                />
                <FlatList
                    style={{
                        paddingVertical: 5,
                        flex: 2,
                    }}
                    data={DATA}
                    renderItem={({ item }) =>
                        (selectedFilter !== "0" &&
                            item.status === selectedFilter && (
                                <TaskItem title={item.title} />
                            )) ||
                        (selectedFilter === "0" && (
                            <TaskItem title={item.title} />
                        ))
                    }
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>
        </>
    );
}
