import { View, Text,StyleSheet,Image,TouchableOpacity,ScrollView } from 'react-native';
import React from 'react';
import ScreenHeader from '../../component/Header/ScreenHeader';
import { Link } from '@react-navigation/native';
import Icon  from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  return (
    <View style={styles.ProfileContainer}>
        <ScreenHeader />
      <Text style={styles.profileHeading}>Profile</Text>
        <ScrollView>
            <View style={styles.profileCard}>
                <View style={styles.leftSecton}>
                    <Image style={styles.profilePic} source={require('../../../assets/event.jpeg')} />
                </View>
                <View style={styles.rightSecton}>
                    <Text style={styles.name}>Aditya Chandrikapure</Text>
                    <Text style={styles.usertype}>Student</Text>
                    <Text style={styles.registerId}>19007002</Text>
                    <Text style={styles.admin}>Admin</Text>
                </View>
            </View>
            <View style={styles.cardDetails}>
                <TouchableOpacity style={styles.Card}>
                <Text style={styles.cardName}>Edit Profile</Text>
                <Text style={styles.cardArrow}> <Link to="/homeLogin"><Icon name="angle-right" size={30} color="black" /> </Link> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Card}>
                <Text style={styles.cardName}>Uploaded News List</Text>
                <Text style={styles.cardArrow}> <Link to="/allNews"><Icon name="angle-right" size={30} color="black" /> </Link> </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Card}>
                <Text style={styles.cardName}>Add News</Text>
                <Text style={styles.cardArrow}><Link to="/addNews"><Icon name="angle-right" size={30} color="black" /> </Link></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Card}>
                <Text style={styles.cardName}>Logout</Text>
                <Text style={styles.cardArrow}> <Link to="/viewNews"><Icon name="angle-right" size={30} color="black" /> </Link> </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
    profileCard:{
        flexDirection:'row',
        alignItems:'center',
        margin:10
    },
    profilePic:{
        height:120,
        width:120,
        borderRadius:80,
        margin:10
    },
    name:{
        fontWeight:'700',
        fontSize:18,
    },
    usertype:{
        fontWeight:'700',
        fontSize:15,
    },
    registerId:{
        fontWeight:'700',
        fontSize:15,
    },
    admin:{
        fontWeight:'700',
        fontSize:15,
        backgroundColor:'#E4E4E4',
        width:80,
        borderRadius:10,
        padding:5,
        marginVertical:5,
        textAlign:'center'
    },
    profileHeading:{
        textAlign:'center',
        fontSize:23,
        fontWeight:'700',
        textDecorationLine:'underline'
    },
    cardDetails:{
        flexDirection:'column',
        margin:10,
        marginVertical:5,
      },
      Card:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:15,
        paddingHorizontal:20,
        backgroundColor:'#E4E4E4',
        margin:10,
        marginVertical:8,
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

export default Profile;