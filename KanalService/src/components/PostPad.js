import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

function PostPad({user}) {
    console.log(user)
    const [post, setPost] = useState({})
    const [photo, setPhoto] = useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
        .then((res)=> res.json())
        .then((data)=> setPost(data[0]))
    },[])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${user.id}`)
        .then((res)=>res.json())
        .then((data)=> setPhoto(data[0]))
    },[])
    return (
        <View style={styles.post}>
            <Image source={{ uri: photo?.thumbnailUrl }} style={{height:150, width:150}}/>
            <Text style={styles.text}>Autor: {user?.name}</Text>
            <Text style={styles.text}>Company: {user?.company?.name}</Text>
            <Text style={styles.text}>Title: {post?.title}</Text>
        </View>
    );
}

const styles = {
    text: {
        marginBottom:8, 
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 16,
        lineHeight: 19,
        alignItems: 'center',
    },
    post: {
        width: 325, 
        height: 470,
        margin: 10, 
        borderWidth:5 , 
        borderColor: '#27569C', 
        borderRadius: 6, 
        padding: 5, 
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }
}

export default PostPad;