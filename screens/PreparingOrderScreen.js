import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(()=>navigation.navigate("Delivery"), 4000);
  },[]);
  return (
    <View className="bg-[#00b8cc] flex-1 justify-center items-center">
      <Animatable.Image
      source={{uri: "https://media.giphy.com/media/3ohs4lXjuQeKPWGdGM/giphy.gif"}}
      className="h-96 w-96"
      iterationCount={1}
      animation="slideInUp"
      />

<Animatable.Text
      className="text-white font-medium text-lg my-10"
      iterationCount={1}
      animation="slideInUp"
      >
        Waiting for restaurant to accept your order
</Animatable.Text>

<Progress.Circle size={60} indeterminate={true} color="white"/>
    </View>
  )
}

export default PreparingOrderScreen