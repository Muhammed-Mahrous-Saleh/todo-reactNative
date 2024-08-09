import { StatusBar } from "expo-status-bar";
import "@expo/metro-runtime";
import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
} from "react-native";
import InputField from "../components/InputField";
import { styles } from "../styles/styles";
import TaskItem from "../components/TaskItem";
import { DATA, updateData } from "../shared/db";
import FilterOptions from "../components/FilterOptions";
import { useState } from "react";
import AddForm from "../components/AddForm";

export default function Home() {
    const [selectedFilter, setSelectedFilter] = useState("0");
    const [data, setData] = useState(DATA);
    const handleFilterSelect = (id) => {
        setSelectedFilter(id);
    };
    const handleCheck = (task) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.id !== task.id
                    ? item
                    : task.status === "1"
                    ? (item.status = "2") && item
                    : (item.status = "1") && item
            )
        );
        // change data
        updateData([...data]);
        // const itemIndex = DATA.findIndex((item) => item.id === task.id);
        // DATA.splice(itemIndex, 1, task);
        // console.log("DATA", DATA);
    };
    const handleDelete = (task) => {
        setData((prevData) => prevData.filter((item) => item.id !== task.id));
        // change data
        updateData([...data]);
        // const itemIndex = DATA.findIndex((item) => item.id === task.id);
        // DATA.splice(itemIndex, 1);
        // console.log("DATA", DATA);
    };
    const handleAddTask = (task) => {
        setData((prevData) => [task, ...prevData]);
        // change data
        updateData([task, ...data]);
        // DATA.push(task);
        // console.log("DATA", DATA);
    };
    return (
        <>
            <SafeAreaView style={styles.container}>
                <AddForm handleAddTask={handleAddTask} />
                <View style={styles.divider} />
                <FilterOptions
                    handleFilterSelect={handleFilterSelect}
                    selectedFilter={selectedFilter}
                />
                {(DATA.length === 0 && <Text>No Data</Text>) || (
                    <FlatList
                        style={{
                            flex: 2,
                            marginBottom: 25,
                        }}
                        data={DATA}
                        renderItem={({ item }) =>
                            ((selectedFilter !== "0" &&
                                item.status === selectedFilter) ||
                                selectedFilter === "0") && (
                                <TaskItem
                                    todo={item}
                                    handleCheck={handleCheck}
                                    handleDelete={handleDelete}
                                />
                            )
                        }
                        keyExtractor={(item) => item.id}
                    />
                )}
            </SafeAreaView>
        </>
    );
}
