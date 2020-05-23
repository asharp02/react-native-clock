import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import KeepAwake from "react-native-keep-awake";

// export default function App() {
//     return (
//         <View style={styles.container}>
//             <Text>Hello World!!</Text>
//         </View>
//     );
// }

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar style={{ backgroundColor: "transparent" }} />
                <Text style={styles.timeText}>Time Goes Here</Text>
                <Text style={styles.dateText}>Date Goes Here</Text>
                <KeepAwake />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    timeText: {
        color: "#999999",
        fontSize: 150
    },
    dateText: {
        color: "#999999",
        fontSize: 150
    }
});
