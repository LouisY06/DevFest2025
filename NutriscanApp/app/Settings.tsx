// Settings.tsx

import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Settings: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header with a back button and title */}
      <View style={styles.header}>
        <Link href="/" style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </Link>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Placeholder settings options */}
        <View style={styles.settingItem}>
          <Text style={styles.settingTitle}>Change Profile Picture</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingTitle}>Account Settings</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingTitle}>Notifications</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingTitle}>Privacy</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingTitle}>About</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    paddingHorizontal: 10,
    justifyContent: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 15,
    padding: 5,
  },
  backButtonText: {
    fontSize: 24,
    color: '#007AFF',
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 60, // Vertically centers the title in the header
  },
  content: {
    padding: 20,
  },
  settingItem: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  settingTitle: {
    fontSize: 18,
  },
});
