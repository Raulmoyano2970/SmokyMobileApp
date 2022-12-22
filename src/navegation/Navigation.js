import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer} from '@react-navigation/native';
import VapersScreens from '../screens/VapersScreens';
import EliquidsScreens from '../screens/EliquidsScreens'; 
import DetailsCart from "../screens/DetailsCart";
import Home from '../screens/Home';
import User from '../screens/User';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStackNavigator = createNativeStackNavigator()
function MyStack() {
    return(
        <HomeStackNavigator.Navigator>
            <HomeStackNavigator.Screen
            name='Smoky'
            component={Home}/>
            <HomeStackNavigator.Screen
            name='Vapers'
            component={VapersScreens}
            options={{
                headerBackTitleVisible: false,
            }}
            />
            <HomeStackNavigator.Screen
            name='E-liquids'
            component={EliquidsScreens}/>
            <HomeStackNavigator.Screen
            name='Shop'
            component={DetailsCart}/>
            <HomeStackNavigator.Screen
            name='SignUp'
            component={SignUp}
            options={{
                headerBackTitleVisible: false,
            }}/>
            <HomeStackNavigator.Screen
            name='SignIn'
            component={SignIn}
            options={{
                headerBackTitleVisible: false,
            }}/>
        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator()

function MyTabs(){
    return(
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: '#1f6e6b',
            }}
        >
            <Tab.Screen name= 'Home' 
            component={MyStack}
            options={{
                tabBarIcon: ({ color, size}) =>(
                    <MaterialCommunityIcons name='home' size={30}/>
                )
            }}
            ></Tab.Screen>
            <Tab.Screen name= 'User' component={User}
            options={{
                tabBarIcon: ({ color, size}) =>(
                    <MaterialCommunityIcons name='login' size={30}/>
                )
            }}
            ></Tab.Screen>
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )

}

//esperar para poder completar