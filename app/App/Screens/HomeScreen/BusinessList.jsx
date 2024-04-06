import React, { useEffect, useState } from 'react'
import Heading from '../../components/heading/Heading.jsx'
import { FlatList, Text, View } from 'react-native'
import GlobalApi from '../../Utils/GlobalApi.js'
import BusinessListRenderItem from './BusinessListRenderItem.jsx'

export default function BusinessList() {
    
    const [businessList, setBusinessList] = useState([])

    useEffect(() => {
        getBusinessList()
    }, [])
    
    
    const getBusinessList = () => {
        GlobalApi.getBusinessList().then((response) => {
            console.log("response getBusinessList:", response);
            setBusinessList(response.businessLists)
        })
    }
    
    return <>
        <View className="mt-4">
            <Heading text="Latest Business" isViewAll={true} />
            <FlatList
                data={businessList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <BusinessListRenderItem item={item} index= {index}/>
                )}
            />
        </View>
    </>
}
