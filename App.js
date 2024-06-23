import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import ChatListItem from './src/components/ChatListItem';
// import ChatScreens from './src/screens/ChatsScreens';
import ChatScreens from './src/screens/ChatScreens';

// const chat = {
//   id : "1",
//   user: {
//     image: 
//       "https://upload.wikimedia.org/wikipedia/commons/5/57/Bagan_Sunset.jpg",
//       name: "Myanmar Bagan",
//   },
//   lastMessage : {
//     text: "Home back",
//     createdAt: "18:00",
//   }
// }
export default function App() {
  return (
    <View style={styles.container}>
      {/* <ChatListItem chat={chat}/> */}
      {/* <ChatScreens /> */}
      <ChatScreens/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
});
