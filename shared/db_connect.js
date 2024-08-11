import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (data) => {
    try {
        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem("toDoTasks", jsonValue);
    } catch (error) {
        console.error("Failed to store data:", error);
    }
};

const retrieveData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem("toDoTasks");
        if (jsonValue !== null) {
            return JSON.parse(jsonValue);
        } else {
            console.log("no data found");
            return []; // Initialize with an empty array if no data is found
        }
    } catch (error) {
        console.error("Failed to retrieve data:", error);
    }
};

export { storeData, retrieveData };
