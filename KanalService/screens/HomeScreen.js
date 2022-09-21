/* eslint-disable react/jsx-filename-extension */
import { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../src/components/Header';
import Post from '../src/components/Post';

function HomeScreen() {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=> res.json())
    .then((data)=> setPosts(data))
  },[])
  return (
    <>
    <Header/>
    <View style={{alignItems: 'center'}}>
      <ScrollView>
      {posts?.map((el)=> <Post post={el} key={posts?.id}/> )}
      </ScrollView>
    </View>
    </>
  );
}

export default HomeScreen;
