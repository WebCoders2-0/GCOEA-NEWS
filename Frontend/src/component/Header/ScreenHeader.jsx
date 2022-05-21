import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import React from 'react';
import {StatusBar} from 'react-native';

const ScreenHeader = () => {
  return (
    <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.leftContainer}>
            <Image source={require('../../../assets/icon.png')} resizeMode='contain'
            style={styles.leftImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.MiddleContainer}>
            <Text style={{color:'black',fontWeight:'700',fontSize:22}}>GCOEA-NEWS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.RightContainer}>
            <Image source={require('../../../assets/icon.png')} resizeMode='contain'
            style={styles.rightImage} />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:StatusBar.currentHeight ,
        padding: 20,
    },
    MiddleContainer:{
    },
    leftImage:{
        height:40,
        width:40
    },
    rightImage:{
        height:40,
        width:40
    }
})

export default ScreenHeader;