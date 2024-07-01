import { View, Text, ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native';
import React, {useEffect}from 'react';
import Message from '../components/Message';
import bg from '../../assets/images/BG.png';
import messages from '../../assets/data/messages.json'
import InputBox from '../components/InputBox';

const ChatScreens = () => {

    const route = useRoute();
    const navigation = useNavigation();


    useEffect(() => {
        navigation.setOptions({ title : route.params.name})

    }, [ route.params.name ]);
    
    return (
        <KeyboardAvoidingView 
            style={styles.bg}
            keyboardVerticalOffset={68}
        >
             <ImageBackground
        source={bg} style={styles.bg}>
            <FlatList data={messages} renderItem={({ item }) => <Message message={item} />} 
                style={styles.list}
                inverted
             />
             <InputBox/>

        </ImageBackground>

        </KeyboardAvoidingView>
       
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    list: {
        padding: 10,
    }
})

export default ChatScreens