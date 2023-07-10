import React from 'react';
import Header from '../shared/header';
import { Home, ReviewDetails, About } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function NavMyRoutes() {
    const myHeader: DrawerNavigationOptions = (title) => {
        return {
            title: title,
            headerTitleAlign: 'center',
            headerTitle: (props) => {
                return (
                    <Header title={`GameZone`} />
                )
            }
        }
    };

    const initParams = { key: '0' };

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} options={myHeader("Home")} />
                <Drawer.Screen name="ReviewDetails" initialParams={initParams} component={ReviewDetails} options={myHeader("Review Details")} />
                <Drawer.Screen name="About" component={About} options={myHeader("About")} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}