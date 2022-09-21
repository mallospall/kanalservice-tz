import { Image, View } from 'react-native';

function Logo() {
    return (
        <View style={{alignItems:'flex-start', flex:1, gap: 10, padding:10, width:90, height: 83, left: 15, top:18 }}>
            <Image source={require('../../assets/logo.png')} resizeMode="contain" style={{width:70, height:63}} />
        </View>
    );
}

export default Logo;