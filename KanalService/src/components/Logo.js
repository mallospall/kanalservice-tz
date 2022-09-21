import { Image, View } from 'react-native';
import { useSelector } from 'react-redux';

function Logo() {
    const { device } = useSelector((s)=> s)

    return (
        <View style={{ gap: 10, padding:10, width:90, height: 83, left: 15, top:18 }}>
            {device? <Image source={require('../../assets/flogo.png')} resizeMode="contain" style={{width:273, height:63}} />
                : <Image source={require('../../assets/logo.png')} resizeMode="contain" style={{width:70, height:63}} />
            }
        </View>
    );
}
export default Logo;