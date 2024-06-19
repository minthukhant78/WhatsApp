import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ChatListItem = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bagan%2C_Burma.jpg/1024px-Bagan%2C_Burma.jpg' }}
                style={styles.image}
            />
            <View style={styles.content}>
            <View style={styles.row}>
                    <Text numberOfLines={1} style= {styles.name}> Myanmar</Text>
                    <Text style= {styles.subTitle}>5:00PM</Text>
                </View>

                <Text numberOfLines={2}  style= {styles.subTitle}>
                    Bagan is the present-day standard Burmese pronunciation of the Burmese word Pugan (ပုဂံ) 
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
    },
    content : {
        flex :1,
        
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgray",
    },
    row: {
        flexDirection: "row",
        marginBottom: 5,
      },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    name: {
        flex: 1,
        fontWeight: "bold",
      },
      subTitle: {
        color: "gray",
      },
    
})
export default ChatListItem