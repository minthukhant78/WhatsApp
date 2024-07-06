import React, { Component } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import dayjs from "dayjs";
import { useNavigation } from "@react-navigation/native";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const ContactListItem = ({
  chat,
  user,
  onPress = () => {},
  selectable = false,
  isSelected = false,
}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={(onPress) =>
        navigation.navigate("Chat", { id: chat.id, name: chat.user.name })
      }
      style={styles.container}
    >
      <Image source={{ uri: chat.user.image }} style={styles.image} />
      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.name}>
          {" "}
          {chat.user.name}
        </Text>

        <Text numberOfLines={2} style={styles.subTitle}>
          {chat.user.status}
        </Text>
      </View>
      {selectable &&
        (isSelected ? (
          <AntDesign name="checkcircle" size={24} color="royalblue" />
        ) : (
          <FontAwesome name="circle-thin" size={24} color="lightgray" />
        ))}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
  },
  subTitle: {
    color: "gray",
  },
});
export default ContactListItem;
