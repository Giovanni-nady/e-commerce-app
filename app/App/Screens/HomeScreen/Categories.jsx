import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi.js'

export default function Categories() {
    
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
    }, [])
    

    const getCategories = () => {
        GlobalApi.getCategories().then(response => {
            console.log("categories",response);
        })
    }
    
    return (
        <View className="pt-5">
            <Text className="text-lg" style={{ fontFamily: 'outfit-medium' }}>Categories</Text>
        </View>
    )
}