import React from 'react';
import {TextInput,View,Text} from 'react-native';

const Input = ({label,value,onChangeText,placeholder,secureTextEntry}) => {

    const {inputStyle,labeStyle,containerStyle}=styles
        return(
            <View style={containerStyle}>
                <Text style={labeStyle}> {label} </Text>
                <TextInput
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    autoCorrect={false}
                    style={inputStyle}
                    value={value}
                    onChangeText={onChangeText}/>
            </View>
        );
};

const styles={
    labeStyle:{
        fontSize:18,
        paddingLeft:20,
        flex:1
    },
    inputStyle:{
        lineHeight:23,
        fontSize:18,
        paddingLeft:5,
        paddingRight:5,
        flex:2

    },
    containerStyle:{
        flexDirection : 'row',
        flex:1,
        height:40,
        alignItems:'center'
    }
}

export {Input};
