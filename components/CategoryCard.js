import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity/sanity';

const CategoryCard = ({imgURL, title}) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{
        // uri: urlFor(imgURL).width(200).url(),
        uri: imgURL
      }}
      className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard;