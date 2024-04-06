import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalApi from '../../Utils/GlobalApi.js';
import BusinessListByCategoryRenderItem from './BusinessListByCategoryRenderItem.jsx';
import Colors from '../../Utils/Colors.js';

export default function BusinessListByCategory() {
    const navigation = useNavigation()
    const param = useRoute().params;

    const [businessListByCategoryName, setBusinessListByCategoryName] = useState([])

    useEffect(() => {
        param && getCategoryByName()
    }, [param])


    const getCategoryByName = () => {
        GlobalApi.getBusinessListByCategory(param.category)
            .then((response) => {
                console.log("category by name", response);
                setBusinessListByCategoryName(response.businessLists)
            })
    }

    return <>
        <SafeAreaView className="p-5">
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="flex flex-row gap-3 items-center">
                <Ionicons name="arrow-back-outline" size={30} color="black" />
                <Text className="text-2xl" style={{ fontFamily: "outfit-medium" }}>{param.category}</Text>
            </TouchableOpacity>

            {businessListByCategoryName?.length > 0 ? <FlatList
                data={businessListByCategoryName}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 15 }}
                renderItem={({ item, index }) => (
                    <BusinessListByCategoryRenderItem item={item} index={index} />
                )}
            /> :
                <Text style={{ fontFamily: "outfit-medium", color: Colors.GRAY,marginTop:'20%' }}
                    className="text-xl text-center">No Business Found</Text>
            }
        </SafeAreaView>
    </>
}
