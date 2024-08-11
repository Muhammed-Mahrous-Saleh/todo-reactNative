import { FlatList } from "react-native";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";

export default function Todos({ selectedFilter, handleDelete }) {
    const { todos, loading, error } = useSelector((state) => state.todo);
    return (
        <FlatList
            style={{
                flex: 2,
                marginBottom: 25,
            }}
            data={todos}
            renderItem={({ item }) =>
                ((selectedFilter !== "0" && item.status === selectedFilter) ||
                    selectedFilter === "0") && (
                    <TaskItem todo={item} handleDelete={handleDelete} />
                )
            }
            keyExtractor={(item) => item.id}
        />
    );
}
