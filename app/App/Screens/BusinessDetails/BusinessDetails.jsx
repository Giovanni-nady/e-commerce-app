import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function BusinessDetails() {

    const param = useRoute().params;
    const navigation = useNavigation()

    useEffect(() => {

    }, [param])

    return param.business &&
        <View className="relative">
            <Image source={{ uri: param.business?.image[0]?.url }} style={{ width: "100%", height: 300 }} />
            <LinearGradient colors={['rgba(0, 0, 0, 0.65)', 'transparent']}
                className="absolute h-full w-full flex justify-between">
                <TouchableOpacity onPress={()=>navigation.goBack()} className="mt-14 ml-4">
                    <Ionicons name="arrow-back-outline" size={35} color="white" />
                </TouchableOpacity>
            </LinearGradient>
            {/* <Text>{JSON.stringify(param.business)}</Text> */}
            <Text>BusinessDetails</Text>
        </View>

}