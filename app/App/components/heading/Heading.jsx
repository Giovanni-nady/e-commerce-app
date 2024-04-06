import { View, Text } from 'react-native'
import React from 'react'

export default function Heading({ text, isViewAll = false }) {
    return (
        <View className="flex flex-row items-center justify-between">
            <Text className="text-lg" style={{ fontFamily: 'outfit-medium' }}>{text}</Text>
            {isViewAll && <Text>View All</Text>}
        </View>
    )
}