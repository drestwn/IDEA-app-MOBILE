import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./HomeScreen";
import { ProductsScreen } from "./ProductsScreen";
import { DetailProductScreen } from "./DetailProductScreen";

const Stack = createStackNavigator();

export const MyStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Details" component={DetailProductScreen} />
    </Stack.Navigator>
  );
};
