import { Home, ReviewDetails, About } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function NavMyRoutes() {
    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Drawer.Navigator 
                initialRouteName="Home" 
                backBehavior='firstRoute'
            >
                <Drawer.Screen name="Home" component={Home} options={{ title: 'Home' }} />
                <Drawer.Screen name="ReviewDetails" initialParams={{ key: '0' }} component={ReviewDetails} options={{ title: 'Review Details' }} />
                <Drawer.Screen name="About" component={About} options={{ title: 'About' }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}