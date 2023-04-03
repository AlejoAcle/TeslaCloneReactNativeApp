import React from 'react';
import { View, Image } from 'react-native';

import stylesHeader from './stylesHeader';

export const Header = () => {
  return (
    <View style={stylesHeader.container}>
        <Image styles={stylesHeader.logo} source={require('../../assets/images/logo.png')}/>
        <Image styles={stylesHeader.menu} source={require('../../assets/images/menu.png')}/>
    </View>
  )
}
