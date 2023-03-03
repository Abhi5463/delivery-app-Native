import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import CategoryCard  from './CategoryCard';
import client from '../sanity/sanity';

const Categories = () => {
  const [category, setCategory] = useState([]);
  // useEffect(()=>{
  //   client.fetch(`

  //   *[_type == "category"]

  //   `).then((data)=>setCategory(data))
  // },[])
  // console.log("category data", category);
  return (
   <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
    paddingHorizontal: 16,
    paddingTop:12,
   }}>

    {/* { category.map(categ => (
      <CategoryCard key={categ._id} imgURL={categ.image} title={categ.name}/>
    ))} */}
      <CategoryCard imgURL="https://links.papareact.com/wru" title="food1"/>
      <CategoryCard imgURL="https://links.papareact.com/wru" title="food3"/>
      <CategoryCard imgURL="https://links.papareact.com/wru" title="food4"/>
      <CategoryCard imgURL="https://links.papareact.com/wru" title="food5"/>
      <CategoryCard imgURL="https://links.papareact.com/wru" title="food4"/>
      <CategoryCard imgURL="https://links.papareact.com/wru" title="food5"/>
   </ScrollView>
  )
}

export default Categories;