import AsyncStorage from "@react-native-async-storage/async-storage";

const DATA_KEY = "todo_data";

export const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(DATA_KEY);
        if (jsonValue != null) {
            try {
                return JSON.parse(jsonValue);
            } catch (e) {
                console.error("Error parsing JSON:", e);
                // If parsing fails, return an empty array or default data
                return [];
            }
        } else {
            return []; // If no data found, return an empty array
        }
    } catch (e) {
        console.error("Failed to fetch data from AsyncStorage:", e);
        return []; // Handle fetch failure by returning an empty array
    }
};

export const setData = async (data) => {
    try {
        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem(DATA_KEY, jsonValue);
    } catch (e) {
        console.error("Failed to save data", e);
    }
};

export const FILTER_OPTIONS = [
    { id: "0", title: "All" },
    { id: "1", title: "Active" },
    { id: "2", title: "Done" },
];
