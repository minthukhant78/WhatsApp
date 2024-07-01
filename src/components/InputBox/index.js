import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState} from 'react'
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';
const InputBox = () => {

    const [newMessage, setNewMessage] = useState('');
    const onSend = () => {
        console.warn('Sending Meassage' , newMessage);
        setNewMessage('')
    }
    return (
        <SafeAreaView edges={['bottom']} style={styles.container}>
            <AntDesign name='plus' size={28} color={'royalblue'} />

            <TextInput
                   value={newMessage}
                   onChangeText={setNewMessage}
                style={styles.input}
                placeholder="Type your message..."
            />

            <MaterialIcons
                style={styles.send}
                name="send"
                size={16}
                color="white"
                onPress={onSend}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "whitesmoke",
        padding: 5,
        paddingHorizontal: 10,
        alignItems: "center",
    },
    input: {
        flex: 1,
        backgroundColor: "white",
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,

        borderRadius: 50,
        borderColor: "lightgray",
        borderWidth: StyleSheet.hairlineWidth,
    },
    send: {
        backgroundColor: "royalblue",
        padding: 7,
        borderRadius: 15,
        overflow: "hidden",
    },

    attachmentsContainer: {
        alignItems: "flex-end",
    },
    selectedImage: {
        height: 100,
        width: 200,
        margin: 5,
    },
    removeSelectedImage: {
        position: "absolute",
        right: 10,
        backgroundColor: "white",
        borderRadius: 10,
        overflow: "hidden",
    },
});


export default InputBox