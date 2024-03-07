import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type IconName = "menu";
// Add more icon names as needed

type Props = {
  iconName: IconName;
  title: string;
  onMenuPress: () => void; // Function to handle menu icon press
  onUserPress: () => void; // Function to handle user image press
};

const Header = (props: Props) => {
  const { iconName, title, onMenuPress, onUserPress } = props;

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onMenuPress}>
        <Ionicons name={iconName} size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onUserPress}>
        <Image
          source={require("../../../assets/images/defaultUser.png")}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 30, // Adjust width as needed
    height: 30, // Adjust height as needed
    resizeMode: "contain", // Adjust resize mode as needed
  },
});
