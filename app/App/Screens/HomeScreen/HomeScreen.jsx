import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from "@clerk/clerk-expo";
import HomeHeader from './HomeHeader.jsx';
import Slider from './Slider.jsx';
import Categories from './Categories.jsx';
import BusinessList from './BusinessList.jsx';

export default function HomeScreen() {

    const { isLoaded, signOut } = useAuth();
    if (!isLoaded) {
        return null;
    }
    return <>

        <HomeHeader />

        <View className="p-5">
            <Slider />
            <Categories />
            <BusinessList/>
        </View>

        <View className="pt-10">
            
            <Button
                title="Sign Out"
                onPress={() => {
                    signOut();
                }}
            />
        </View>
    </>
}