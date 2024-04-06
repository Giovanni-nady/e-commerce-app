import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen.jsx';
import BusinessListByCategory from '../Screens/BusinessListByCategory/BusinessListByCategory.jsx';

const Stack = createStackNavigator();

export default function HomeNavigation() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="BusinessList" component={BusinessListByCategory} />
        </Stack.Navigator>
    );
}