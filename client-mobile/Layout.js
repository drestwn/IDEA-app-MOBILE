import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
export default function Layout() {
  return (
    <View style={styles.container}>
      <Text style={styles.textWhite}>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  textWhite: {
    color: "black",
  },
});
