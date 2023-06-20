import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
export function UserScreen() {
  return (
    <View styles={styles.container}>
      {/* <Text>Insipration Screen</Text> */}
      <Image
        style={styles.imageContainerShop}
        source={require("../assets/underConstruction.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  imageContainerShop: {
    // height: 130,
    // width: 190,flex: 1,
    // flexDirection: "column ",
    margin: 20.0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});
