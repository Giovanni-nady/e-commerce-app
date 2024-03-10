import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors.js';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeHeader() {

    const { user, isLoading } = useUser();
    return user && (
        <View className="p-5 pt-10 rounded-b-3xl" style={{ backgroundColor: Colors.PRIMARY }}>
            <View className="w-full flex flex-row items-center justify-between">
                <View className="flex flex-row gap-3 justify-between items-center">
                    <Image source={{ uri: user?.imageUrl }} className="w-[50] h-[50] rounded-full"
                        style={{ borderWidth: 1, borderColor:"white"}} />
                    <View>
                        <Text className="text-white">Welcome,</Text>
                        <Text style={{fontFamily:'outfit'}} className="text-white font-medium text-lg">{user?.fullName}</Text>
                    </View>
                </View>
                <FontAwesome name="bookmark-o" size={30} color="white" />
            </View>

            <View className="mt-4 flex flex-row justify-between">
                <TextInput placeholder='search'
                    className="bg-white rounded-md py-2 px-4 w-[85%] text-lg"
                />
                <View className="bg-white rounded-md p-3">
                <FontAwesome name="search" size={24} color={Colors.PRIMARY} />
                </View>
            </View>
        </View>
    )
}