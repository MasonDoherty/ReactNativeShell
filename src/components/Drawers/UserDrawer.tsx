import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import UserProfilePage from "../User/UserProfilePage"; // Import the user profile page component

type Props = {
  onClose: () => void;
};

const UserDrawer: React.FC<Props> = ({ onClose }) => {
  const windowWidth = useWindowDimensions().width;

  const slideAnimation = useRef(new Animated.Value(0)).current;
  const drawerWidth = 0.9 * windowWidth; // Assuming window.width is available

  useEffect(() => {
    // Slide in animation when component mounts
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 300, // Adjust the duration as needed
      useNativeDriver: false,
    }).start();
  }, []);

  const closeDrawer = () => {
    // Slide out animation when closing the drawer
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 300, // Adjust the duration as needed
      useNativeDriver: false,
    }).start(() => onClose());
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
                outputRange: [drawerWidth, 0],
              }),
            },
          ],
        },
      ]}
    >
      <TouchableOpacity style={styles.closeButton} onPress={closeDrawer}>
        <Ionicons name="close" size={24} color="black" />
      </TouchableOpacity>
      <UserProfilePage />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    padding: 10,
    position: "absolute",
    right: -2,
    top: 10,
    height: "95%",
    width: "90%",
    backgroundColor: "white",
    zIndex: 1,
    borderColor: "black",
    borderWidth: 2,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
});

export default UserDrawer;
