import { StatusBar } from "expo-status-bar";
import "@expo/metro-runtime";
import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
} from "react-native";
import { styles } from "../styles/styles";
import TaskItem from "../components/TaskItem";
import FilterOptions from "../components/FilterOptions";
import { useEffect, useState } from "react";
import AddForm from "../components/AddForm";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
    const [selectedFilter, setSelectedFilter] = useState("0");
    const [dataList, setDataList] = useState([]);

    const _storeData = async (data) => {
        try {
            const jsonValue = JSON.stringify(data);
            await AsyncStorage.setItem("toDoTasks", jsonValue);
            setDataList(data);
        } catch (error) {
            console.error("Failed to store data:", error);
        }
    };

    const _retrieveData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem("toDoTasks");
            if (jsonValue !== null) {
                setDataList(JSON.parse(jsonValue));
            } else {
                _storeData([]); // Initialize with an empty array if no data is found
            }
        } catch (error) {
            console.error("Failed to retrieve data:", error);
        }
    };

    useEffect(() => {
        _retrieveData();
    }, []);

    const handleFilterSelect = (id) => {
        setSelectedFilter(id);
    };
    const handleCheck = (task) => {
        const updatedData = dataList.map((item) =>
            item.id !== task.id
                ? item
                : task.status === "1"
                ? { ...item, status: "2" }
                : { ...item, status: "1" }
        );
        _storeData(updatedData);
    };
    const handleDelete = (task) => {
        const updatedData = dataList.filter((item) => item.id !== task.id);
        _storeData(updatedData);
    };
    const handleAddTask = (task) => {
        const updatedData = [task, ...dataList];
        _storeData(updatedData);
    };
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Text style={{ ...styles.title, marginBottom: 15 }}>
                    TODO APP
                </Text>
                <AddForm handleAddTask={handleAddTask} />
                <View style={styles.divider} />
                <FilterOptions
                    handleFilterSelect={handleFilterSelect}
                    selectedFilter={selectedFilter}
                />
                {(dataList.length === 0 && (
                    <Text
                        style={{
                            flex: 2,
                            marginBottom: 25,
                        }}
                    >
                        No Data
                    </Text>
                )) || (
                    <FlatList
                        style={{
                            flex: 2,
                            marginBottom: 25,
                        }}
                        data={dataList}
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
