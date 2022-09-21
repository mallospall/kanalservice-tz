import { Image, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authAction';

function LogoutIcon() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <TouchableOpacity onPress={logoutHandler}>
        <View style={{ gap: 10, padding:10, width:90, height: 83, top: 18 }}>
            <Image source={require('../../assets/Group.png')} resizeMode="contain" style={{width:70, height:63, tintColor: '#27569C' }} />
        </View>
        </TouchableOpacity>
    );
}

export default LogoutIcon;