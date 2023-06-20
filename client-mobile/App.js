import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Layout from "./Layout";
import { HomeScreen } from "./screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { InsiprationScreen } from "./screens/InspirationScreen";
import { UserScreen } from "./screens/UserScreen";
import { ShoppingList } from "./screens/ShoppingList";
import { CartScreen } from "./screens/CartScreen";
import { MyStacks } from "./screens/Stacks";
import { ApolloProvider } from "@apollo/client";
import client from "./config/index";

export default function App() {
  const NavBar = createBottomTabNavigator();
  return (
    <>
      <ApolloProvider client={client}>
        <PaperProvider>
          {/* <SafeAreaView style={{ flex: 1 }}> */}
          <NavigationContainer>
            <NavBar.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === "HomePage") {
                    iconName = focused
                      ? "home"
                      : //lagi di click^ icon
                        "home";
                    //lagi gak di click^ icon
                  } else if (route.name === "Inspirations") {
                    iconName = focused
                      ? "bulb"
                      : //lagi di click^ icon
                        "bulb";
                  } else if (route.name === "User") {
                    iconName = focused
                      ? "people"
                      : //lagi di click^ icon
                        "people";
                  } else if (route.name === "Shopping") {
                    iconName = focused
                      ? "heart"
                      : //lagi di click^ icon
                        "heart";
                  } else if (route.name === "Cart") {
                    iconName = focused
                      ? "cart"
                      : //lagi di click^ icon
                        "cart";
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "gray",
              })}
            >
              <NavBar.Screen
                name="HomePage"
                component={MyStacks}
                options={{ headerShown: false }}
              />
              <NavBar.Screen
                name="Inspirations"
                component={InsiprationScreen}
              />
              <NavBar.Screen name="User" component={UserScreen} />
              <NavBar.Screen name="Shopping" component={ShoppingList} />
              <NavBar.Screen name="Cart" component={CartScreen} />
            </NavBar.Navigator>
          </NavigationContainer>
          {/* </SafeAreaView> */}
        </PaperProvider>
      </ApolloProvider>
    </>
  );
}
