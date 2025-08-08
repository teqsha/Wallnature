import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screen/HomeScreen';
import WallPaperScreen from '../screen/WallPaperScreen';

<<<<<<< HEAD

=======
>>>>>>> c7ee3f1d3bfb85a5d523e6237c0a8c1e8b94ff57
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WallPaperScreen"
          component={WallPaperScreen}
          options={{
            headerShown: false}}
        />
      </Stack.Navigator>
  )
}

export default StackNavigation