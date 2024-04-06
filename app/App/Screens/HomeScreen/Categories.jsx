import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi.js'
import Heading from '../../components/heading/Heading.jsx'
import Colors from '../../Utils/Colors.js'
import { useNavigation } from '@react-navigation/native'

export default function Categories() {

    const [categories, setCategories] = useState([])
    const navigation = useNavigation()

    useEffect(() => {
        getCategories()
    }, [])


    const getCategories = () => {
        GlobalApi.getCategories().then(response => {
            console.log("categories", response);
            setCategories(response?.categories)
        })
    }


    return (
        <View className="pt-2">
            <Heading text={"Categories"} isViewAll={categories.length > 3 ? true : false} />
            <FlatList
                data={categories}
                numColumns={4}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => index <= 3 && (
                    <TouchableOpacity
                        onPress={() => navigation.push('BusinessList', { category: item.name })}
                        className="flex-1 items-center justify-center">
                        <View className="p-4 rounded-full" style={{ backgroundColor: Colors.LIGHT_GRAY }}>
                            <Image source={{ uri: item?.icon?.url }} className="rounded-xl" style={{ objectFit: 'contain', width: 30, height: 30 }} />
                        </View>
                        <View>
                            <Text style={{ fontFamily: 'outfit' }} className="text-center mt-1">{item?.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}