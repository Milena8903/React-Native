import React from "react";

import { View, Image, TextInput, Button, StyleSheet} from "react-native";

const LoginScreen = () => {
    return(
        <View>
            <Image source= {{ uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={styles.image}/>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width:70,
        height:70,
        alignSelf: "center",
    }
})

export default LoginScreen;