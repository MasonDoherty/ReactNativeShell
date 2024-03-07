import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  useWindowDimensions,
  Text,
} from "react-native";
import MenuList from "../Menu/MenuList";
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
  iconName: IconName;
  onPress: () => void;
};

type Props = {
  onClose: () => void;
};

const MenuDrawer: React.FC<Props> = ({ onClose }) => {
  const windowWidth = useWindowDimensions().width;
  const slideAnimation = useRef(new Animated.Value(0)).current;
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const drawerWidth = 0.9 * windowWidth;
  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const closeDrawer = () => {
    Animated.parallel([
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => onClose());
  };

  return (
    <Animated.View
      style={[
        styles.drawer,
        {
          transform: [
            {
              translateX: slideAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [-drawerWidth, 0],
              }),
            },
          ],
        },
      ]}
    >
      <TouchableOpacity style={styles.closeButton} onPress={closeDrawer}>
        <Ionicons name="close" size={24} color="black" />
      </TouchableOpacity>
      <MenuList
        menuItems={[
          {
            title: "Search",
            iconName: "search",
            onPress: () => console.log("Search pressed"),
          },
          {
            title: "Favorites",
            iconName: "heart",
            onPress: () => console.log("Favorites pressed"),
          },
          {
            title: "About Us",
            iconName: "information-circle",
            onPress: () => console.log("About Us pressed"),
          },
          {
            title: "Privacy Policy",
            iconName: "document-text",
            onPress: () => console.log("Privacy Policy pressed"),
          },
        ]}
      />
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Log out</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    padding: 10,
    position: "absolute",
    left: -2,
    top: 10,
    height: "95%",
    width: "90%",
    backgroundColor: "white",
    zIndex: 1,
    borderColor: "black",
    borderWidth: 2,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  logoutButton: {
    marginTop: "auto",
    backgroundColor: "#ff1e00",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default MenuDrawer;
