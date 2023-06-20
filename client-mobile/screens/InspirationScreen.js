import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import { GET_CATEGORY } from "../queries/index";
import { Button } from "react-native-paper";
import { useQuery, useLazyQuery } from "@apollo/client";
export function InsiprationScreen() {
  const { data, loading, error } = useQuery(GET_CATEGORY);
  // console.log(data);
  // const listCategory = data.categories;
  return (
    <>
      <View styles={styles.container}>
        <View styles={styles.containerImage}>
          {/* <Text>Insipration Screen</Text> */}
          <Image
            style={styles.imageContainerShop}
            source={require("../assets/underConstruction.jpg")}
          />
        </View>
      </View>
      {/* <View style={styles.container}>
        <View style={styles.containerTop}>
          <Text style={styles.textCointainerTop}>Insiprations</Text>
          <Text style={styles.textCointainerTop}>Collection</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <ScrollView horizontal style={styles.containerCategory}>
        <View style={styles.listCategory}>
          {listCategory.map((el, index) => (
            <View key={index} style={styles.buttonContainer}>
              <Button
                mode="contained"
                onPress={() => console.log("Pressed")}
                style={styles.buttonSetting}
              >
                {el.name}
              </Button>
            </View>
          ))}
        </View>
      </ScrollView> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  imageContainerShop: {
    margin: 20.0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  containerTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 7,
    marginLeft: 5,
  },
  textCointainerTop: {
    fontSize: 20,
    color: "black",
    margin: 5,
  },

  divider: {
    borderBottomWidth: 1,
    borderColor: "gray",
    marginVertical: 2,
    width: "100%",
  },
  listCategory: {},
  containerCategory: {
    flexDirection: "row",
    marginVertical: 2,
  },
  listCategory: {
    flexDirection: "row",
  },
  buttonContainer: {
    backgroundColor: "white",
    paddingHorizontal: 2,
  },
  buttonSetting: {
    backgroundColor: "#0051ba",
  },
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
