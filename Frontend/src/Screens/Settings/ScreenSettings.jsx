import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import ScreenHeader from '../../component/Header/ScreenHeader';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from '@react-navigation/native';
import { AuthContext } from '../../component/context';
const ScreenSettings = () => {

  const {logout}  = React.useContext(AuthContext);
  
  return (
    <View style={styles.SettingsContainer}>
      <ScreenHeader />
      <Text style={styles.heading}>Settings</Text>
      <View style={styles.cardDetails}>
        <TouchableOpacity style={styles.Card}>
          <Text style={styles.cardName}>Notification</Text>
          <Text style={styles.cardArrow}> <Icon name="angle-right" size={30} color="black" /> </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Card}>
          <Text style={styles.cardName}>Change Password</Text>
          <Text style={styles.cardArrow}> <Icon name="angle-right" size={30} color="black" /> </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Card}>
          <Text style={styles.cardName}>Profile Changes</Text>
          <Text style={styles.cardArrow}> <Icon name="angle-right" size={30} color="black" /> </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Card}>
          <Text style={styles.cardName}>Feedback</Text>
          <Text style={styles.cardArrow}> <Icon name="angle-right" size={30} color="black" /> </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Card} onPress={() => logout()}>
          <Text style={styles.cardName}>Logout</Text>
          <Text style={styles.cardArrow}> <Icon name="angle-right" size={30} color="black" /> </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  SettingsContainer:{
    },
    heading:{
      textAlign:'center',
      justifyContent:'center',
      alignItems:'center',
      fontSize:23,
      fontWeight:'700',
      marginTop:20
    },
    cardDetails:{
      flexDirection:'column',
      margin:10,
    },
    Card:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      padding:20,
      backgroundColor:'#E4E4E4',
      margin:10,
      borderRadius:10,
      shadowColor: '#7F5DF0',
      shadowOffset: {
          width: 0,
          height: 10
      },
      shadowOpacity: 0.35,
      shadowRadius: 3.5,
      elevation: 5
    },
    cardName:{
      fontSize:18,
      fontWeight:'700'
    },
    cardArrow:{
      fontSize:25,
      fontWeight:'700'
    }
})

export default ScreenSettings;