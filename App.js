import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import KeepAwake from "react-native-keep-awake";
import moment from "moment";

// export default function App() {
//     return (
//         <View style={styles.container}>
//             <Text>Hello World!!</Text>
//         </View>
//     );
// }

export default class App extends Component {
    se;
    constructor(props) {
        super(props);
        this.state = {
            time: moment().format("LTS"),
            date: moment().format("LL")
        };
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: moment().format("LTS"),
                date: moment().format("LL")
            });
        }, 1000);
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar style={{ backgroundColor: "transparent" }} />
                <Text style={styles.timeText}>{this.state.time}</Text>
                <Text style={styles.dateText}>{this.state.date}</Text>
                {/* <KeepAwake /> */}
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
        fontSize: 45
    },
    dateText: {
        color: "#999999",
        fontSize: 45
    }
});
