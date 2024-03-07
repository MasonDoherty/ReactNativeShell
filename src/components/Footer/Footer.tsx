import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

type IconName = "calendar" | "home" | "cog";

type Props = {
  icons: IconName[];
  onPressCalendar?: () => void;
  onPressHome?: () => void; // Add onPressHome prop
  onPressCog?: () => void; // Add onPressCog prop
};

const Footer = (props: Props) => {
  const { icons, onPressCalendar, onPressHome, onPressCog } = props;

  const handleIconPress = (icon: IconName) => {
    switch (icon) {
      case "calendar":
        if (onPressCalendar) onPressCalendar();
        break;
      case "home":
        if (onPressHome) onPressHome(); // Close any open drawers
        break;
      case "cog":
        if (onPressCog) onPressCog(); // Toggle cog drawer
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.footerContainer}>
      {icons.map((icon, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleIconPress(icon)}
          style={styles.iconButton}
        >
          <Ionicons name={icon} size={24} color="black" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "lightgray",
  },
  iconButton: {
    paddingHorizontal: 10,
  },
});

export default Footer;
