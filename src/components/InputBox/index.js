import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const InputBox = () => {
  const [newMessage, setNewMessage] = useState("");
  const onsend = () => {
    console.warn("sending a new message:", newMessage);
    setNewMessage("");
  };

  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={24} color="royalblue" />
      <TextInput
        value={newMessage}
        style={styles.input}
        onChangeText={setNewMessage}
        placeholder="Type message..."
      />
      <MaterialIcons
        onPress={onsend}
        name="send"
        style={styles.send}
        size={24}
        color="white"
      />
    </View>
  );
};
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
    borderRadius: 50,
    paddingHorizontal: 10,
    borderColor: "lightgray",
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    backgroundColor: "royalblue",
    padding: 7,
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
  },
});

export default InputBox;
