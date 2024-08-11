import { StatusBar } from "expo-status-bar";
import "@expo/metro-runtime";
import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
    Alert,
    Modal,
    StyleSheet,
    Pressable,
    ImageBackground,
} from "react-native";
import { styles } from "../styles/styles";
import TaskItem from "../components/TaskItem";
import FilterOptions from "../components/FilterOptions";
import { useEffect, useState } from "react";
import AddForm from "../components/AddForm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Todos from "../components/Todos";
import { storeData, retrieveData } from "../shared/db_connect";
import { addTodo, removeTodo, retrieveTodos } from "../redux/slices/todo.slice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
    const [selectedFilter, setSelectedFilter] = useState("0");
    const [modalVisible, setModalVisible] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState(null);
    const dispatch = useDispatch();
    const {
        todos: dataList,
        loading,
        error,
    } = useSelector((state) => state.todo);

    useEffect(() => {
        (async () => {
            const retrievedData = await retrieveData();
            dispatch(retrieveTodos(retrievedData));
        })();
    }, []);

    const handleFilterSelect = (id) => {
        setSelectedFilter(id);
    };

    const handleDelete = (task) => {
        setModalVisible(true);
        setTaskToDelete(task);
    };

    const handleDeleteAfterConfirm = () => {
        dispatch(removeTodo(taskToDelete.id));
        setModalVisible(!modalVisible);
    };

    return (
        <>
            <ImageBackground
                source={require("../assets/backgroundImage.jpg")}
                style={styles.background}
            >
                <SafeAreaView style={styles.container}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                            setTaskToDelete(null);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>
                                    Are you sure, you want to delete "
                                    {taskToDelete?.title}" task?
                                </Text>
                                <View style={{ flexDirection: "row", gap: 10 }}>
                                    <Pressable
                                        style={{
                                            ...styles.button,
                                            ...styles.buttonClose,
                                            backgroundColor: "gray",
                                        }}
                                        onPress={() =>
                                            setModalVisible(!modalVisible)
                                        }
                                    >
                                        <Text style={styles.textStyle}>
                                            Cancel
                                        </Text>
                                    </Pressable>
                                    <Pressable
                                        style={{
                                            ...styles.button,
                                            ...styles.buttonClose,
                                            backgroundColor: "red",
                                        }}
                                        onPress={() =>
                                            handleDeleteAfterConfirm(
                                                taskToDelete
                                            )
                                        }
                                    >
                                        <Text style={styles.textStyle}>
                                            Delete
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <Text style={{ ...styles.title, marginBottom: 15 }}>
                        TODO APP
                    </Text>
                    <AddForm />
                    <View style={styles.divider} />
                    {dataList.length !== 0 && (
                        <FilterOptions
                            handleFilterSelect={handleFilterSelect}
                            selectedFilter={selectedFilter}
                        />
                    )}
                    {(dataList.length === 0 && (
                        <Text
                            style={{
                                flex: 2,
                                marginBottom: 25,
                                fontSize: 20,
                            }}
                        >
                            Add Task to start 😊
                        </Text>
                    )) || (
                        <Todos
                            selectedFilter={selectedFilter}
                            handleDelete={handleDelete}
                        />
                    )}
                </SafeAreaView>
            </ImageBackground>
        </>
    );
}
