import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    text: ""
                }
            ],
            test: ""
        };
    }

    showValue() {
        const {test, data} = this.state
        data.push({ text: test });
        this.setState({ data: data });
        this.textInput.clear()
    }

    keypressHandler (event) {
        if (event.nativeEvent.key == "Enter") {
            this.showValue();
        }
    }

    removeText (index) {
        const {data} = this.state
        data.splice(index, 1);
        this.setState({data: data})
    }

    render() {
        const { data, test } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>Todo App</Text>
                {data.map((home, idx) => (
                    <div key={idx} onClick={()=>{this.removeText(idx)}}>{home.text}</div>
                ))}

                <TextInput
                    ref={input => { this.textInput = input }}
                    onKeyPress={ (event) => {this.keypressHandler(event)}}
                    onChangeText={(val) => this.setState({test: val})}
                    style={{ border: "solid", borderWidth: 1, width: "50%" }}
                ></TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ecf0f1"
    },
    paragraph: {
        margin: 24,
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        color: "#34495e"
    }
});

