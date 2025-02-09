import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs>
      {/* Existing tab screens */}
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      {/* New profile tab */}
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
