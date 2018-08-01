import React from 'react';
import {View, Text} from 'react-native';

const Header = ({title}) =>{
    const {headerStyle,textStyle}=styles
    return(
        <View style={headerStyle}>
            <Text style={textStyle}>{title} </Text>
        </View>
    );
}
export {Header};

const styles={
    headerStyle:{
        justifyCenter:'center',
        alignItems:'center',
        backgroundColor:'#F8F8F8',
        shadowColor:'#000',
        shadowRadius:2,
        shadowOffset:{height:4,width:0},
        shadowOpacity:0.1,
        height:60,
        padding:20
    },
    textStyle:{
        fontSize:20
    }
}