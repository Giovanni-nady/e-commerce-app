import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookingScreen from '../Screens/BookingScreen/BookingScreen.jsx';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen.jsx';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Utils/Colors.js';
import HomeNavigation from './HomeNavigation.jsx';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.PRIMARY
        }}>
            <Tab.Screen name="Home" component={HomeNavigation}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Home</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" size={size} color={color} />
                    )
                }} />
            <Tab.Screen name="Booking" component={BookingScreen}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Booking</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="bookmark" size={size} color={color} />
                    )
                }} />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Profile</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user-circle" size={size} color={color} />
                    )
                }} />
        </Tab.Navigator>
    )
}