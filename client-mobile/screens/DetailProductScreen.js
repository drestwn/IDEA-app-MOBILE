import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";

export function DetailProductScreen({ route }) {
  const { product } = route.params;

  const image = product.mainImg;
  return (
    <>
      <View style={styles.containerPicture}>
        <Image source={{ uri: image }} style={styles.setImage} />
      </View>
      <View style={styles.containerCard}>
        <Text style={styles.containerCardHeader}>Product Name:</Text>
        <Text style={styles.containerCardContent}>{product.name}</Text>
        <Text style={styles.containerCardHeader}>Description:</Text>
        <Text style={styles.containerCardContent}>{product.description}</Text>
        <Text style={styles.containerCardHeader}>Category:</Text>
        <Text style={styles.containerCardContent}>{product.Category.name}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    padding: 16.0,
    margin: 8.0,
    backgroundColor: "#CCCCCC",
    borderRadius: 8.0,
  },
  containerCardHeader: {
    fontSize: 20.0,
  },
  containerCardContent: {
    fontSize: 15.0,
    marginBottom: 8.0,
    padding: 4.0,
    textTransform: "capitalize",
  },
  containerPicture: {
    flex: 1,
    // flexDirection: "column ",
    padding: 16.0,
    margin: 8.0,
    alignItems: "center",
    justifyContent: "center",
  },
  setImage: { width: 300, height: 300 },
});
