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
      <CategoryCard imgURL="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80" title="Clothes"/>
      <CategoryCard imgURL="https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="food"/>
      <CategoryCard imgURL="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Books"/>
      <CategoryCard imgURL="https://media.istockphoto.com/id/1013751744/photo/woman-collecting-money-for-charity-and-holds-jar-with-coins.jpg?s=612x612&w=is&k=20&c=QVNefd5NQk8orywYFZ4H2sZlg59MsjDm8-0lKW2px1o=" title="Money"/>
      <CategoryCard imgURL="https://media.istockphoto.com/id/1177608272/photo/high-school-students-raising-hands-on-a-class.jpg?s=612x612&w=is&k=20&c=7MttW22Sq-vuGso0lYHemrrMLRD8a6lND9KjRXWr8qU=" title="Education"/>
      <CategoryCard imgURL="https://media.istockphoto.com/id/1348607614/vector/concept-of-volunteering.jpg?s=612x612&w=is&k=20&c=62P8YOHsSVM7LXHbuSt3HtiNEe3UVzZIASNDDwQlW2Y=" title="Others"/>
   </ScrollView>
  )
}

export default Categories;