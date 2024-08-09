import { Dimensions, StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 30,
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        borderBottomWidth: 2,
        borderRadius: 8,
        width: 200,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    divider: {
        width: "80%",
        height: 1,
        backgroundColor: "#ccc",
        marginVertical: 20,
    },
    item: {
        backgroundColor: "gray",
        paddingHorizontal: 80,
        marginVertical: 8,
        marginHorizontal: 16,
        width: Dimensions.get("window").width,
    },
    item_title: {
        fontSize: 32,
    },
    filterButton: {
        height: 40,
        padding: 10,
        marginHorizontal: 5,
        backgroundColor: "#eee",
        borderRadius: 5,
    },
    selectedFilterButton: {
        backgroundColor: "#007BFF",
    },
    filterButtonText: {
        color: "#000",
    },
    filterContainer: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
});
