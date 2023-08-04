import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigation } from '@react-navigation/bottom-tabs';
import { Ionicon } from "@expo/vector-icons"

const Tab = createBottomTabNavigation();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 70
    }
}

const BottomTabNavigation = () => {
    return (
        <Tab.Navigation screenOptions={screenOptions}>
            <Tab.Screens 
                name ="Home" 
                components={Home}
                options={{
                    tabBarIcon: ({focused}) => {
                        return <></>
                    }
                }}
                />
            <Tab.Screens name ="Search" components={Search}/>
            <Tab.Screens name ="Profile" components={Profile}/>
        </Tab.Navigation> 
    )
}

export default BottomTabNavigation