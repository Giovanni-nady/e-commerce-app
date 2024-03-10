import React, { useEffect } from 'react'
import * as WebBrowser from "expo-web-browser";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Colors from '../../Utils/Colors.js'
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser.jsx';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {

    useWarmUpBrowser();

    // const { startOAuthFlow } = useOAuth({ strategy: ["oauth_google", "oauth_facebook"] });
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    
    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
                await startOAuthFlow();

            console.log("createdSessionId", createdSessionId);
            if (createdSessionId) {
                console.log("createdSessionId if", createdSessionId);
                setActive({ session: createdSessionId });
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }, []);
    

    const handleClickingGetStarted = () => {
        console.log("button clicked");
    }
    
    return (
        <View className="items-center">
            <Image source={require('./../../../assets/login.png')}
                className="w-[230] h-[450] mt-[70] rounded-2xl"
                style={{ borderColor: '#000', borderWidth: 4 }}
            />
            <View style={{ backgroundColor: Colors.PRIMARY }} className='w-full h-3/5 mt-[-20] p-[20] rounded-t-[30px]'>
                <Text className="text-white text-2xl text-center mt-2">Let's Find
                    <Text className="font-bold"> Professional Cleaning and repair </Text>
                    Service</Text>

                <Text className="text-white text-base mt-5 text-center">Best app to find services near you which deliver you a professional service</Text>

                <TouchableOpacity onPress={onPress}
                    className="p-4 mt-8 bg-white rounded-full">
                    <Text style={{ color: Colors.PRIMARY }} className="text-base text-center">Let's Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

