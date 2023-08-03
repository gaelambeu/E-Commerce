import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigation } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigation();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigation>
            <Tab.Screens name ="Home" components={Home}/>
        </Tab.Navigation>
    )
}

export default BottomTabNavigation