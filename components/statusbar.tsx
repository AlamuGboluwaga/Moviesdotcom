import {useColorScheme,StatusBar } from 'react-native'
import React from 'react'

const Statusbar = () => {
    const colorScheme = useColorScheme()
  return (
   <StatusBar backgroundColor={"#161622"} barStyle={colorScheme === 'light' ?"light-content":"dark-content"}/>
  )
}

export default Statusbar