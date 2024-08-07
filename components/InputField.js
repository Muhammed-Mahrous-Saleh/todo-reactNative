import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";

export default function InputField({ placeholder }) {
    const [text, setText] = useState("");
    return (
        <View style={{ padding: 8 }}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={(newText) => setText(newText)}
                defaultValue={text}
            />
            {/* <Text style={{ padding: 10, fontSize: 42 }}>
                {text
                    .split(" ")
                    .map((word) => word && "🍕")
                    .join(" ")} 
            </Text> */}
        </View>
    );
}
