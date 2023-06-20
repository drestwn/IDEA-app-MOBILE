import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Avatar, Card, IconButton, Button } from "react-native-paper";
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_PRODUCT, GET_PRODUCT_BY_ID } from "../queries/index";

export function ProductsScreen({ item, navigation }) {
  const { data, loading, error } = useQuery(GET_PRODUCT);
  if (loading) return <Text>Loading ...</Text>;
  if (error) return <Text>{error.message}</Text>;

  const listProduct = data.products;
  return (
    <ScrollView style={styles.scrollView}>
      <TouchableOpacity>
        {listProduct.map((el, index) => {
          return (
            <Card.Title
              key={el.id}
              title={el.name}
              subtitle={el.price}
              left={(props) => (
                <Avatar.Icon {...props} icon="folder" style={styles.iconLogo} />
                // <Avatar.Image
                //   size={24}
                //   source={el.mainImg}
                //   style={styles.iconLogo}
                // />
              )}
              right={(props) => (
                <>
                  <Button
                    // {...props}
                    style={styles.buttonStyle}
                    mode="contained"
                    onPress={() =>
                      navigation.navigate("Details", {
                        product: el,
                      })
                    }
                  >
                    Detail
                  </Button>
                </>
              )}
            />
          );
        })}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#0051ba",
    marginRight: 2,
  },
  iconLogo: {
    backgroundColor: "#0051ba",
    width: 40,
    height: 40,
  },
});
