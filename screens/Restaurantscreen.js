import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftCircleIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import DishCard from "../components/DishCard";
import CartSticker from "../components/CartSticker";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart } from "../slices/cartCountSlice";
import { setRestaurant } from "../slices/restaurantSlice";


export default function Restaurantscreen() {
  //  const route = useRoute();
  //  const title = route.params.title;
  const dispatch = useDispatch();
  const Navigation = useNavigation();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      lat,
      long,
      dishes,
      short_description,
      address,
      genre,
    },
  } = useRoute();
  console.log(
    id,
    imgUrl,
    title,
    rating,
    lat,
    long,
    dishes,
    short_description,
    address,
    genre,
    "from res screen"
  );
  useLayoutEffect(() => {
    Navigation.setOptions({
      headerShown: false,
    });
  }, []);
const totalItem = useSelector(addItemsToCart);
useEffect(()=>{
  dispatch(setRestaurant({  id,
    imgUrl,
    title,
    rating,
    lat,
    long,
    dishes,
    short_description,
    address,
    genre
  }));
}
,[dispatch]);
  return (
    <>
      <ScrollView>
        <View className="relative">
          <Image
            className="h-52 w-full bg-gray-300 p-4"
            source={{ uri: imgUrl }}
          />
          <TouchableOpacity
            className="absolute top-8 left-2 bg-gray-100 rounded-full"
            onPress={() => {
              Navigation.goBack();
            }}
          >
            <ArrowLeftCircleIcon color="#00CCBB" size={42} />
          </TouchableOpacity>
        </View>

        <View className="bg-white p-4">
          <Text className="font-bold text-3xl">{title}</Text>

          <View className="flex-row space-x-1 my-1">
            <View className="flex-row items-center space-x-1 ">
              <StarIcon color="green" size={22} opacity={0.5} fill="green" />
              <Text className="text-xs text-green-500">{rating}</Text>
              <Text className="text-xs text-gray-500"> . {genre}</Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <MapPinIcon color="gray" size={22} opacity={0.4} fill="gray" />
              <Text className="text-xs text-gray-500">Nearby . {address}</Text>
            </View>
          </View>

          <View className="pt-2">
            <Text>{short_description}</Text>
          </View>
        </View>

        <View className="flex-row justify-between m-2 bg-white p-2">
          <View className="flex-row">
            <TouchableOpacity>
              <QuestionMarkCircleIcon size={20} color="green" />
            </TouchableOpacity>
            <Text className="font-semibold text-md ml-3">
              Have a food allergy?
            </Text>
          </View>

          <View>
            <TouchableOpacity>
              <ChevronRightIcon size={20} color="green" />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text className="font-extrabold text-3xl m-2">Menu</Text>
          <DishCard
            imgUrl="https://links.papareact.com/wru"
            title="Sundaram"
            description="what a hotel, I mean what a hotel, really what a hotel, I mean what a hotel, what a hotel, I mean what a hotel"
            price={5}
            id={2}
          />
          <DishCard
            imgUrl="https://links.papareact.com/wru"
            title="gfgfhfghg"
            description="what a hotel, I mean what a hotel, really what a hotel, I mean what a hotel, what a hotel, I mean what a hotel"
            price={5}
            id={5}
          />
          <DishCard
            imgUrl="https://links.papareact.com/wru"
            title="efzfsfsdf"
            description="what a hotel, I mean what a hotel, really what a hotel, I mean what a hotel, what a hotel, I mean what a hotel"
            price={5}
            id={9}
          />
          <DishCard
            imgUrl="https://links.papareact.com/wru"
            title="hgjhkjk"
            description="what a hotel, I mean what a hotel, really what a hotel, I mean what a hotel, what a hotel, I mean what a hotel"
            price={5}
            id={76}
          />
          <DishCard
            imgUrl="https://links.papareact.com/wru"
            title="nmbnbnm"
            description="what a hotel, I mean what a hotel, really what a hotel, I mean what a hotel, what a hotel, I mean what a hotel"
            price={5}
            id={21}
          />
          <DishCard
            imgUrl="https://links.papareact.com/wru"
            title="zszszszs"
            description="what a hotel, I mean what a hotel, really what a hotel, I mean what a hotel, what a hotel, I mean what a hotel"
            price={5}
            id={98}
          />
          <DishCard
            imgUrl="https://links.papareact.com/wru"
            title="iuiuiuiuiu"
            description="what a hotel, I mean what a hotel, really what a hotel, I mean what a hotel, what a hotel, I mean what a hotel"
            price={5}
            id={24}
          />
        </View>
      </ScrollView>
      {totalItem.length>0 && <CartSticker />}
    </>
  );
}
