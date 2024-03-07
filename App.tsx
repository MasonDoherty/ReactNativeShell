import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/pages/Home";

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }} // Hide the header for the "Home" screen
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <CustomFooter icons={[]} /> */}
    </View>
  );
};

export default App;
