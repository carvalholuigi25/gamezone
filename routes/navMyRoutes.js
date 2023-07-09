import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import About from "../screens/about";

export default function NavMyRoutes() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
                <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{ title: 'Review Details' }} />
                <Stack.Screen name="About" component={About} options={{ title: 'About' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}