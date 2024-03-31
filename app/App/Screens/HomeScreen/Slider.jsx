import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi.js'

export default function Slider() {

  const [slider, setSlider] = useState([])

  useEffect(() => {
    getSliders()
  }, [])

  const getSliders = () => {
    GlobalApi.getSlider().then(res => {
      console.log("res", res);
      setSlider(res?.sliders)
      console.log(res?.sliders);
    })
  }

  return (
    <View>
      <Text className="text-lg" style={{ fontFamily: 'outfit-medium' }}>Offers for you</Text>
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return <View key={index} className="mr-4">
            <Text className="text-black">{item?.name}</Text>
            <Image source={{ uri: item?.image?.url }} className="rounded-xl" style={{objectFit:'contain',width:280,height:125}} />
          </View>
        }}
      />
    </View>
  )
}