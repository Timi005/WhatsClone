import {
  KeyboardAvoidingView,
  ImageBackground,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import Message from "../components/Message";
import bg from "../../assets/images/BG.png";
import messages from "../../assets/data/messages.json";
import InputBox from "../components/InputBox";
import { useRoute, useNavigation } from "@react-navigation/native";
const ChatScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  navigation.setOptions({ title: route.params.name });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          style={styles.list}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});
export default ChatScreen;
