import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import React from 'react';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ScreenHeader = () => {
  return (
    <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.leftContainer}>
            <Icon name="bars" size={25} color="#3A1347" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.MiddleContainer}>
            <Text style={{color:'black',fontWeight:'700',fontSize:22}}>GCOEA-NEWS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.RightContainer}>
            <Icon name="bell" size={25} color="#3A1347" />
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