import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Searchbar } from "react-native-paper";
import React from "react";

export function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const carouselImages = [
    require("../assets/carousell1.jpg"),
    require("../assets/carousell2.jpg"),
    require("../assets/carousell1.jpg"),
    require("../assets/carousell2.jpg"),

    // Add more image sources as needed
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const renderIndicator = ({ index }) => (
    <View
      style={[
        styles.indicator,
        index === activeIndex && styles.activeIndicator,
      ]}
    />
  );
  const handleCarouselScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const activeIndex = Math.floor(contentOffset / slideSize);
    setActiveIndex(activeIndex);
  };
  const handleChangeShop = () => {
    navigation.navigate("Products");
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Image
          style={styles.tinyLogo}
          source={require("../assets/IkeaLogo.png")}
        />
        <View style={styles.containerSearchBar}>
          <View style={styles.searchBar}>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </View>
        </View>
        <View style={styles.containerQR}>
          <Ionicons name="qr-code" size={20} color="black" />
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.containerTab}>
        <View style={styles.containerTabItem}>
          <Text>
            <Ionicons name="home" size={20} color="black" />
            Home
          </Text>
        </View>
        <View style={styles.containerTabItem}>
          <Text>
            <Ionicons name="md-pricetag" size={20} color="black" /> Offers
          </Text>
        </View>
      </View>
      <View style={styles.containerCarousell}>
        <FlatList
          horizontal
          data={carouselImages}
          renderItem={({ item }) => (
            <Image source={item} style={styles.imageCarousell} />
          )}
          keyExtractor={(_, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onMomentumScrollEnd={handleCarouselScroll}
          contentContainerStyle={styles.carouselContainer}
        />
        <View style={styles.indicatorContainer}>
          {carouselImages.map((_, index) => (
            <View key={index} style={styles.indicatorWrapper}>
              {renderIndicator({ index })}
            </View>
          ))}
        </View>
      </View>
      <View style={styles.containerShop}>
        <Text style={styles.textContainerShop}>Shop by</Text>
        <View style={styles.shopContainerImage}>
          <TouchableOpacity onPress={handleChangeShop}>
            <Image
              style={styles.imageContainerShop}
              source={require("../assets/ProductShop.jpg")}
            />
          </TouchableOpacity>
          <Image
            style={styles.imageContainerShop}
            source={require("../assets/RoomsShop.jpg")}
          />
        </View>
        <View style={styles.textShopContainerShop}>
          <TouchableOpacity
            onPress={() => {
              handleChangeShop;
            }}
          >
            <Text style={styles.textShop}>Products</Text>
          </TouchableOpacity>
          <Text style={styles.textShop}>Rooms</Text>
        </View>
      </View>
    </View>
  );
}
const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: "gray",
    marginVertical: 2,
    width: "100%",
  },
  containerTop: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 7,
    marginLeft: 5,
    justifyContent: "space-between",
  },
  searchBar: {
    flex: 1,
    width: "90%",
    marginLeft: 18,
  },
  containerQR: {
    marginRight: 15,
  },
  containerSearchBar: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "flex-end",
    justifyContent: "center",
  },
  textWhite: {
    color: "black",
  },
  tinyLogo: {
    width: 120,
    height: 50,
  },
  containerTab: {
    // backgroundColor: "lightblue",
    width: "100%",
    height: 50,
    marginBottom: 10,
    // justifyContent: "center",
    alignItems: "left",
    flexDirection: "row",
  },
  containerTabItem: {
    // backgroundColor: "red",
    width: 70,
    height: 50,
    justifyContent: "center",
    margin: 5,
  },
  scrollViewContent: {
    alignItems: "center",
    paddingVertical: 10,
  },
  containerCarousell: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "green",
    // marginTop: 10,
    height: 230,
  },
  imageCarousell: {
    width: windowWidth,
    height: 200,
    resizeMode: "contain",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    // backgroundColor: "red",
  },
  indicatorWrapper: {
    paddingHorizontal: 5,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "gray",
  },
  activeIndicator: {
    backgroundColor: "black",
  },
  carouselContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  containerShop: {
    // justifyContent: "center",
    // backgroundColor: "red",
    // alignItems: "center",
    height: 200,
    marginTop: 20,
  },
  textContainerShop: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 7,
    marginBottom: 10,
  },
  shopContainerImage: {
    flexDirection: "row",
    // marginHorizontal: 100,
    justifyContent: "space-around",
    // alignItems: "center",
  },
  imageContainerShop: {
    height: 130,
    width: 190,
    // justifyContent: "space-between",
  },
  textShopContainerShop: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textShop: {
    fontWeight: "bold",
    marginTop: 10,
  },
});
