import React from 'react';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Scan Food" }} />
        </Tabs>
    );
}
