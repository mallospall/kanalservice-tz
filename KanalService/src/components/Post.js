import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

function Post({post}) {
    console.log(post)
    const [user, setUser] = useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then((res)=> res.json())
        .then((data)=> setUser(data))
    },[])
    console.log('------------->>>',user)
    return (
        <View style={{width: 292, height: 200, margin: 15, borderWidth:5 , borderColor: '#27569C', borderRadius: 6, padding: 10}}>
            <Text>{user?.name}</Text>
            <Text>{user?.company?.name}</Text>
            <Text>{post?.title}</Text>
        </View>
    );
}

export default Post;