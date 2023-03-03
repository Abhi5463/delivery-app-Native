import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowDownIcon, ArrowRightIcon } from "react-native-heroicons/outline";
import FeatureCard from "./FeatureCard";
import client from "../sanity/sanity";

const FeaturedContent = ({ description, title, id }) => {
  const [featuredetail, setFeaturedetail] = useState([]);
//   useEffect(() => {
//     client.fetch(`
//     *[_type == "featured" && _id == $id]{
//       ...,
//       restaurants[]->{
//         ...,
//         dishes[]->,
//         type->{
//           name
//         }
//       },
//     }[0]
//  `, { id })
//  .then((data) => { 
//   setFeaturedetail(data?.restaurants);//restaurant details
//  });
//   }, [id]);
  console.log("restaurant data from featured list",featuredetail);
  console.log("received as prop in FeaturedContent",description, title, id);
  return (
    <View>
      <View className="flex-row justify-between mt-4 px-4 items-center">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>

      <Text className="px-4 text-xs text-gray-500">{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >

        {/* {
          featuredetail.map(restaurantdata => (
            <FeatureCard 
            key={restaurantdata._id}
            id={restaurantdata._id}
            imgUrl={restaurantdata.image}
            title={restaurantdata.name}
            rating={restaurantdata.rating}
            lat={restaurantdata.lat}
            long={restaurantdata.long}
            dishes={restaurantdata.dishes}
            short_description={restaurantdata.short_description}
            address={restaurantdata.address}
            genre={restaurantdata.type.name}
            />
          ))
        } */}
        <FeatureCard
          id={123}
          imgUrl="https://links.papareact.com/wru"
          title="first one!!"
          rating={4.5}
          lat={25.3819260}
          long={87.0904168}
          dishes={[]}
          short_description="desvcription description description desvcription description description desvcriptiondescription description desvcriptiondescription description desvcription "
          address="240 yemen road Yemen"
          genre="chinese"
        />

        <FeatureCard
          id={123}
          imgUrl="https://links.papareact.com/wru"
          title="Second one!!"
          rating={4.5}
          lat={25.3819260}
          long={87.0904168}
          dishes={[]}
          short_description="description description desvcription description description desvcription description description desvcription description description desvcriptiondescription description desvcriptiondescription description desvcription "
          address="240 yemen road Yemen"
          genre="chinese"
        />

        <FeatureCard
          id={123}
          imgUrl="https://links.papareact.com/wru"
          title="third one!!"
          rating={4.5}
          lat={25.3819260}
          long={87.0904168}
          dishes={[]}
          short_description="description description desvcription description description desvcription description description desvcription description description desvcriptiondescription description desvcriptiondescription description desvcription "
          address="240 yemen road Yemen"
          genre="chinese"
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedContent;
