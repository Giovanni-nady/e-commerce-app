import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from "@clerk/clerk-expo";
import HomeHeader from './HomeHeader.jsx';

export default function HomeScreen() {

    const { isLoaded, signOut } = useAuth();
    if (!isLoaded) {
        return null;
    }
    return <>

        <HomeHeader />
        <View className="pt-10">
            <Text>HomeScreen</Text>
            <Button
                title="Sign Out"
                onPress={() => {
                    signOut();
                }}
            />
        </View>
    </>
}