import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useLayoutEffect, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedContent from "../components/FeaturedContent";
import client from "../sanity/sanity";
import * as React from 'react';

const Homescreen = () => {
  const Navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    Navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // useEffect(() => {
  //   client
  //     .fetch(
  //       `
  //   *[_type == "featured"]{
  //     ...,
  //     restaurants[]->{
  //       ...,
  //       dishes[]->
  //     }
  //   }`
  //     )
  //     .then((data) => {
  //       setFeaturedCategories(data);
  //     });
  // }, []);

  console.log(featuredCategories, "featured categories");
  return (
    <SafeAreaView style={styles.AndroidSafeArea} className="bg-white">
      {/* icon-location-user-header */}
      <View className="flex-row items-center space-x-2 pb-3 mx-4">
        <View>
          {/* <Image source={require('../assets/delivery.png')}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        /> */}
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
        </View>

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Donate now</Text>

          <View className="flex-row">
            <Text className="font-bold text-xl">Current Location</Text>

            <View className="p-1">
              <ChevronDownIcon size={20} color="#00CCBB" />
            </View>
          </View>
        </View>
        <TouchableOpacity>
        <UserIcon size={35} color="#00CCBB" onPress={()=>Navigation.navigate("MainScreen")}/>
        </TouchableOpacity>
      </View>

      {/* search-filter */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-1">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Find a NGO"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon size={30} color="#00CCBB" />
      </View>

      {/* // Body */}
       <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      > 
        <Categories />

        {/* Featured-content */}

        {/* {featuredCategories?.map(featuredCategory => (
          <FeaturedContent
            key={featuredCategory._id}
            id = {featuredCategory._id}
            description={featuredCategory.short_description}
            title={featuredCategory.name}
          />
       ))} */}

        <FeaturedContent
          description="These are some NGOs near you, for instant self fulfillment!"
          title="NGOs near you"
          FeatureCategory="some kinda feature"
        />
        <FeaturedContent
          description="These are some of the Top NGOs making lives better!"
          title="Top NGOs"
          FeatureCategory="some kinda feature"
        />
        <FeaturedContent
          description="These are some of the NGOs which are growing actively!"
          title="Actively growing NGOs"
          FeatureCategory="some kinda feature"
        />
      </ScrollView>
    </SafeAreaView>
  )
};
const styles = StyleSheet.create({
  AndroidSafeArea: {
    // a workaround for SafeAreaView in Android
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Homescreen;
