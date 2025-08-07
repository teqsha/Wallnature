import { View, Text } from 'react-native'
import React from 'react'
import StackNavigation from '../navigation/StackNavigation'
import { NavigationContainer } from '@react-navigation/native'

const Navigation = () => {
    return (
        <NavigationContainer>
            <StackNavigation/>
        </NavigationContainer>
    )
}

export default Navigation