import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors.js'
import { MaterialIcons } from '@expo/vector-icons'

export default function BusinessListByCategoryRenderItem({ item, index }) {
    return (
        <View key={index} className="flex-col">
            <View className="flex my-2">
                <View className="flex flex-row bg-white p-2 rounded-2xl">
                    <Image source={{ uri: item?.image[0]?.url }} className="w-[100px] h-[100px] object-contain rounded-xl" />

                    <View className="flex gap-2 px-2">
                        <Text className="text-sm" style={{ fontFamily: "outfit", color: Colors.GRAY }}>{item?.contactPerson}</Text>
                        <Text className="text-xl" style={{ fontFamily: "outfit-bold" }}>{item?.name}</Text>
                        <View className="flex flex-row items-center">
                            <MaterialIcons name="location-pin" size={20} color={Colors.PRIMARY} />
                            <Text className="text-base" style={{ fontFamily: "outfit", color: Colors.GRAY }}>
                                {item?.address}</Text>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    )
}