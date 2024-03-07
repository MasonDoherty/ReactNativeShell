import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  Button,
} from "react-native";

const SettingsPage: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] =
    useState<boolean>(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState<boolean>(false);
  const [autoPlayVideos, setAutoPlayVideos] = useState<boolean>(true);
  const [showImages, setShowImages] = useState<boolean>(true);
  const [showAvatars, setShowAvatars] = useState<boolean>(true);
  const [saveHistory, setSaveHistory] = useState<boolean>(true);
  const [searchText, setSearchText] = useState<string>("");

  const toggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled((prev) => !prev);
  };

  const toggleAutoPlayVideos = () => {
    setAutoPlayVideos((prev) => !prev);
  };

  const toggleShowImages = () => {
    setShowImages((prev) => !prev);
  };

  const toggleShowAvatars = () => {
    setShowAvatars((prev) => !prev);
  };

  const toggleSaveHistory = () => {
    setSaveHistory((prev) => !prev);
  };

  const handleDeleteAllData = () => {
    // Implement logic to delete all data
  };

  const handleResetToDefault = () => {
    // Implement logic to reset settings to default
  };

  return (
    <View style={styles.container}>
      <View style={styles.settingsContainer}>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={toggleNotifications}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Dark Mode</Text>
          <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Auto-play Videos</Text>
          <Switch value={autoPlayVideos} onValueChange={toggleAutoPlayVideos} />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Show Images</Text>
          <Switch value={showImages} onValueChange={toggleShowImages} />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Show Avatars</Text>
          <Switch value={showAvatars} onValueChange={toggleShowAvatars} />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Save History</Text>
          <Switch value={saveHistory} onValueChange={toggleSaveHistory} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Delete All Data" onPress={handleDeleteAllData} />
        <Button
          title="Reset to Default Settings"
          onPress={handleResetToDefault}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  settingsContainer: {
    flex: 1,
    width: "100%",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "100%",
  },
  settingText: {
    fontSize: 18,
  },
  buttonContainer: {
    justifyContent: "space-around",
    width: "100%",

    bottom: 0,
  },
});

export default SettingsPage;
