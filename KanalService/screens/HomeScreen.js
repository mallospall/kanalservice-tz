/* eslint-disable react/jsx-filename-extension */
import { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../src/components/Header';
import Post from '../src/components/Post';
import PostPad from '../src/components/PostPad';

function HomeScreen() {
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(false);
  const { device } = useSelector((s)=> s);

  useEffect(()=>{
    setLoad(true)
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=> res.json())
    .then((data)=> {
      setUsers(data);
      setLoad(false)})
  },[])

  return (
    <>
    <Header/>
    <View style={{alignItems: 'center'}}>
      {load? <ActivityIndicator/>
      : (<ScrollView> 
         {users?.map((el)=> (device? <View style={{flexWrap:'wrap',}}><PostPad user={el} key={el?.id}/></View> 
         : <Post user={el} key={el?.id}/> ))}
         </ScrollView>
        )}
    </View>
    </>
  );
}

export default HomeScreen;
