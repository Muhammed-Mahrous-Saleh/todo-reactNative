import { FlatList } from "react-native";
import TaskItem from "./TaskItem";

export default function Todos({
    dataList,
    handleCheck,
    handleDelete,
    selectedFilter,
}) {
    return (
        <FlatList
            style={{
                flex: 2,
                marginBottom: 25,
            }}
            data={dataList}
            renderItem={({ item }) =>
                ((selectedFilter !== "0" && item.status === selectedFilter) ||
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
    );
}
