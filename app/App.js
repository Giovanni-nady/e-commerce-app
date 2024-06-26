import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login.jsx';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import * as SecureStore from "expo-secure-store";
import HomeScreen from './App/Screens/HomeScreen/HomeScreen.jsx';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation.jsx';
import { useFonts } from 'expo-font';

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'outfit-semibold': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
  });

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey='pk_test_c2F2aW5nLWdyYWNrbGUtNzQuY2xlcmsuYWNjb3VudHMuZGV2JA'>
      <View style={styles.container}>

        <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
        </SignedIn>

        <SignedOut>
          <Login />
        </SignedOut>

        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: 30
  },
});
