import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { HeaderTitle } from '@react-navigation/elements'

const Authlayout = () => {
  return (
 <Stack>
    <Stack.Screen
    name='signup'
    options={{
        headerShown:false
    }}
    />
    <StatusBar
    backgroundColor={'red'}
    barStyle={'light-content'}
    
    />
 </Stack>
  )
}

export default Authlayout