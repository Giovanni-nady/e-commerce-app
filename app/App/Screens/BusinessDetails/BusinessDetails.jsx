import { View, Text, Image, Platform, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../Utils/Colors.js';
import { StatusBar } from 'expo-status-bar';
import Heading from './../../components/heading/Heading';

export default function BusinessDetails() {

    const param = useRoute().params;
    const navigation = useNavigation()

    const [showMore, setShowMore] = useState(false)
    console.log("business Details:", param);


    return param.business &&
        <View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ height: '92%' }}>
                <View className="flex-1">
                    <StatusBar animated={true} barStyle={{ color: "white" }} />
                    <View className="relative">
                        <Image source={{ uri: param.business?.image[0]?.url }} style={{ width: "100%", height: 300 }} />
                        <LinearGradient colors={['rgba(0, 0, 0, 0.65)', 'transparent']}
                            className="absolute h-full w-full flex justify-between">
                            <TouchableOpacity onPress={() => navigation.goBack()} className={`${Platform.OS === 'ios' ? "mt-14" : "mt-5"} ml-4`}>
                                <Ionicons name="arrow-back-outline" size={30} color="white" />
                            </TouchableOpacity>
                        </LinearGradient>
                        {/* <Text>{JSON.stringify(param.business)}</Text> */}
                    </View>

                    <View className="flex-1 gap-4 p-4">
                        <Text className="text-2xl" style={{ fontFamily: "outfit-bold" }}>{param.business?.name}</Text>
                        <View className="flex-row items-center">
                            <Text className="text-xl mr-3" style={{ color: Colors.PRIMARY, fontFamily: "outfit-medium" }}>{param.business?.contactPerson} &#129321;</Text>
                            <View className="self-start rounded-lg" style={{ backgroundColor: Colors.Light_PRIMARY }}>
                                <Text className="text-sm p-1" style={{ fontFamily: "outfit", color: Colors.PRIMARY }}>{param.business?.category.name}</Text>
                            </View>
                        </View>
                        <View className="flex-row items-center">
                            <MaterialIcons name="location-pin" size={25} color={Colors.PRIMARY} />
                            <Text className="text-base">
                                {param.business?.address}</Text>
                        </View>

                        <View style={{ borderWidth: 0.4, backgroundColor: Colors.LIGHT_GRAY, marginBottom: 8 }}></View>

                        {/* About me */}
                        <View>
                            <Heading text="About Me" />
                            <Text numberOfLines={showMore ? 10 : 5} className="text-base" style={{ fontFamily: 'outfit', color: Colors.GRAY }}>{param.business?.about}</Text>
                            {param.business?.about.length > 250 && <TouchableOpacity onPress={() => setShowMore(!showMore)}>
                                <Text className="text-base" style={{ color: Colors.PRIMARY }}>{showMore ? 'Show Less' : 'Read More'} </Text>
                            </TouchableOpacity>}
                        </View>

                        <View style={{ borderWidth: 0.4, backgroundColor: Colors.LIGHT_GRAY, marginBottom: 8 }}></View>

                        {/* photos */}
                        <View>
                            <Heading text="Photos" />
                            <FlatList
                                data={param?.business.image}
                                renderItem={({ item }) => (
                                    <Image source={{ uri: item.url }} style={{ width: '100%', height: 120, flex: 1, margin: 7, borderRadius: 15 }} />
                                )}
                                numColumns={2}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View className="flex flex-row m-1 g-2 justify-evenly">
                <TouchableOpacity className="rounded-full text-center border" style={{ borderColor: Colors.PRIMARY }}>
                    <Text className="text-center p-4 px-14" style={{ color: Colors.PRIMARY, fontFamily: 'outfit-medium' }}>Message</Text>
                </TouchableOpacity>
                <TouchableOpacity className=" rounded-full text-center border" style={{ backgroundColor: Colors.PRIMARY, borderColor: Colors.PRIMARY }}>
                    <Text className="text-center p-4 px-14 text-white" style={{fontFamily:'outfit-medium' }}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
}