// Settings.tsx

import { Link } from 'expo-router';
import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Allergy = {
  id: string;
  name: string;
};

// Sample existing allergies
const allergies: Allergy[] = [
  { id: '1', name: 'Peanuts' },
  { id: '2', name: 'Shellfish' },
  { id: '3', name: 'Gluten' },
];

// Sample common allergies to add
const commonAllergies: Allergy[] = [
  { id: '1', name: 'Peanuts' },
  { id: '2', name: 'Shellfish' },
  { id: '3', name: 'Gluten' },
  { id: '4', name: 'Dairy' },
  { id: '5', name: 'Soy' },
  { id: '6', name: 'Eggs' },
  { id: '7', name: 'Wheat' },
  { id: '8', name: 'Fish' },
];

const renderCommonAllergy = ({ item }: { item: Allergy }) => (
  <View style={styles.commonAllergyBox}>
    <Text style={styles.commonAllergyText}>{item.name}</Text>
  </View>
);

const Settings: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header with a back button and title */}
      <View style={styles.header}>
        <Link href="/home" style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </Link>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Allergies Section */}
        <View style={styles.allergiesSection}>
          <Text style={styles.allergiesTitle}>Allergies</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.allergiesContainer}
          >
            {allergies.map((allergy) => (
              <View key={allergy.id} style={styles.allergyBox}>
                <Text style={styles.allergyText}>{allergy.name}</Text>
              </View>
            ))}
          </ScrollView>

          <Text style={styles.addAllergyTitle}>Add More Allergies</Text>
          <FlatList
            data={commonAllergies}
            keyExtractor={(item) => item.id}
            renderItem={renderCommonAllergy}
            numColumns={4}
            contentContainerStyle={styles.commonAllergiesGrid}
          />
        </View>

        {/* Placeholder Settings Options */}
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
    lineHeight: 60,
  },
  content: {
    padding: 20,
  },
  // Allergies Section styles
  allergiesSection: {
    marginBottom: 20,
  },
  allergiesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  allergiesContainer: {
    paddingVertical: 10,
  },
  allergyBox: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  allergyText: {
    fontSize: 16,
    color: '#333',
  },
  addAllergyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  commonAllergiesGrid: {
    paddingBottom: 20,
  },
  commonAllergyBox: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  commonAllergyText: {
    fontSize: 14,
    color: '#555',
  },
  // Settings options styles
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
