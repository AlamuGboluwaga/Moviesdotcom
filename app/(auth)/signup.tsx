import { View, Text, Image } from 'react-native'
import React from 'react'
import Layout from '@/components/Layout'
import Images from '@/components/Images';
import aora from '../../assets/images/aora.png'

const signup = () => {
  return (
     <Layout gap="gap-2">
      <Text>Signup</Text>
      <Images 
      source={aora}
            resizeMode="contain"
            h="h-16"
            w="w-100"
            otherClasses=""/>
   <Text>Sig</Text>
   </Layout>
  )
}

export default signup