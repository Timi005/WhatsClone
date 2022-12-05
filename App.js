import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Chatscreen from "./src/screens/ChatScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Chatscreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingVertical: 50,
  },
});