import React from 'react';
import { View , Text } from 'react-native';

const Card = (props) =>{
    return(
        <View style={Styles.containerStyle}>
            {props.children}
        </View>
    )
}

export {Card};

const Styles={
    containerStyle:{
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        borderBottomWidth:0,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowRadius:2,
        shadowOpacity:0.1,
        elevation:1,
        marginTop:10,
        marginLeft:5,
        marginRight:5

    }
}