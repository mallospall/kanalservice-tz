import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Logo from './Logo';
import LogoutIcon from './LogoutIcon';

function Header() {
    const { auth } = useSelector((s)=> s)

    return (
        <View style={{height: 118, backgroundColor: '#E4B062', justifyContent: 'space-between', flexDirection: 'row', alignItems:'center' }}>
            <Logo/>
            {auth? <LogoutIcon /> : <></>}
        </View>
    );
}


export default Header;