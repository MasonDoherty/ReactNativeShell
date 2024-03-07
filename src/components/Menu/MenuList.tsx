import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type IconName =
  | "menu"
  | "settings"
  | "log-out"
  | "document-text"
  | "search"
  | "information-circle"
  | "heart";
type MenuItem = {
  title: string;
  iconName: IconName; // Use IconName type here
  onPress: () => void;
};

type Props = {
  menuItems: MenuItem[]; // Use MenuItem type here
};

const MenuList: React.FC<Props> = ({ menuItems }) => {
  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={item.onPress}
        >
          <Ionicons name={item.iconName} size={24} color="black" />
          <Text style={styles.menuItemText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    flex: 1,
    padding: 10,
    overflow: "hidden",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "#F0F0F0",
  },
  menuItemText: {
    marginLeft: 16,
    fontSize: 16,
    color: "#333333",
  },
});

export default MenuList;
