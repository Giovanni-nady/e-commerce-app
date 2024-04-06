import React from 'react'
import { Image, Text, View } from 'react-native'
import Colors from '../../Utils/Colors.js'

export default function BusinessListRenderItem({ item, index }) {
    return <>
        <View key={index} className="p-[10px] bg-white mr-2 rounded-lg">
            <Image source={{ uri: item?.image[0]?.url }} className="w-[160px] h-[120px] rounded-md" />
            <View className="flex gap-1 p-1">
                <Text className="text-base" style={{ fontFamily: "outfit-medium" }}>{item?.name}</Text>
                <Text className="text-sm" style={{ fontFamily: "outfit", color: Colors.GRAY }}>{item?.contactPerson}</Text>
                <Text className="text-xs p-1 self-start rounded-md px-2" style={{ fontFamily: "outfit",color: Colors.PRIMARY, backgroundColor:Colors.Light_PRIMARY }}>{item?.category?.name}</Text>
            </View>
        </View>
    </>
}
