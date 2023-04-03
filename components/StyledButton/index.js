import React from 'react';
import { View, Text, Pressable } from 'react-native';

import stylesButton from './stylesButton';

export const StyleButton = (props) => {

    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;

    const { type, content, onPress } = props;


    const backgroundColor = type === 'primary' ? '#171A20CC' : 'FFFFFFA6';
    const textColor = type === 'primary'? '#FFFFFF' : '#171A20';


  return (
    <View style={styles.container}>
        <Pressable 
        // to pass more than one prop of style
            style={[stylesButton.button, {backgroundColor: backgroundColor}]}
            onPress={() => onPress()}>
        
            <Text style={[stylesButton.text, {color: textColor}]}>
                {content}
            </Text>
        
        </Pressable> 
    </View>
  );
};
