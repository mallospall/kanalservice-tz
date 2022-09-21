import React from 'react';
import { View, Text } from 'react-native';
import Logo from './Logo';

function Header() {
    return (
        <View style={{height: 118, backgroundColor: '#E4B062', }}>
            <Logo/>
        </View>
    );
}


export default Header;