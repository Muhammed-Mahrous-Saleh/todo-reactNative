import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import { FILTER_OPTIONS } from "../data/db";

export default function FilterOptions({ selectedFilter, handleFilterSelect }) {
    return (
        <FlatList
            data={FILTER_OPTIONS}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={[
                        styles.filterButton,
                        item.id === selectedFilter &&
                            styles.selectedFilterButton,
                    ]}
                    onPress={() => handleFilterSelect(item.id)}
                >
                    <Text style={styles.filterButtonText}>{item.title}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterContainer}
            style={{ height: 80, flexGrow: 0 }}
        />
    );
}
