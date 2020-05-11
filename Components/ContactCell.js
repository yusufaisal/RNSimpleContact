import PropTypes from "prop-types";
import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";

export default class ContactCell extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired
    }

    alertItemName = (item) => {
        alert(item.name)
    }

    render() {
        const { item, navigation } = this.props;
        const styles =  StyleSheet.create({
            container: {
                flexDirection: "row",
                flex: 1,
                marginTop: 1,
                backgroundColor: "#fff",
                alignItems: "center",
            },
            tinyLogo: {
                width: 50,
                height: 50,
                borderRadius:25,
                margin: 10,
            },
            logo: {
                width: 66,
                height: 58,
            },
        });

        return (
            <View>
                <TouchableOpacity
                    key={item.id}
                    style={styles.container}
                    onPress={() => navigation.navigate("Details", item)}>
                    <Image style={styles.tinyLogo} source={require("../profile-user.png")}/>
                    <Text>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            </View >
        );
    }
}