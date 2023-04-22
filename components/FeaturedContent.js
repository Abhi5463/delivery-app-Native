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
          imgUrl="https://media.istockphoto.com/id/870402320/photo/a-social-worker-meeting-with-a-group-of-villagers.jpg?s=612x612&w=is&k=20&c=JAQOTjAdXVOlOa8kdmuv7nhXJfw8H6SGI9QqLIRvpTU="
          title="Drishti NGO"
          rating={4.5}
          lat={25.3819260}
          long={87.0904168}
          dishes={[]}
          short_description="desvcription description description desvcription description description desvcriptiondescription description desvcriptiondescription description desvcription "
          address="240 yemen road Yemen"
          genre="NGO"
        />

        <FeatureCard
          id={123}
          imgUrl="https://media.istockphoto.com/id/1175282165/photo/a-poor-young-boy-is-out-of-school-cause-of-couldnt-afford-fee.jpg?s=612x612&w=is&k=20&c=7byofU-INrNpwAAqqxLiViIq8hJWMHit5LNTWjdHK78="
          title="Kalyani NGO"
          rating={4.5}
          lat={25.3819260}
          long={87.0904168}
          dishes={[]}
          short_description="description description desvcription description description desvcription description description desvcription description description desvcriptiondescription description desvcriptiondescription description desvcription "
          address="240 yemen road Yemen"
          genre="Old Age Home"
        />

        <FeatureCard
          id={123}
          imgUrl="https://media.istockphoto.com/id/1223036866/photo/monks-of-ramakrishna-mission-donating-foods-during-lockdown-period.jpg?s=612x612&w=is&k=20&c=5xLZNhYinBaFf4R70fI_-V577QS8205AWGmuMHX-q94="
          title="Apna Ghar NGO"
          rating={4.5}
          lat={25.3819260}
          long={87.0904168}
          dishes={[]}
          short_description="description description desvcription description description desvcription description description desvcription description description desvcriptiondescription description desvcriptiondescription description desvcription "
          address="240 yemen road Yemen"
          genre="Orphanage"
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedContent;
