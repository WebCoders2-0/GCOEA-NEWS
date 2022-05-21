import { View, Text,StyleSheet,TouchableOpacity,Image,ScrollView } from 'react-native';
import React from 'react';
import ScreenHeader from '../../component/Header/ScreenHeader';

const About = () => {
  return (
    <ScrollView style={styles.aboutContainer}>
        <ScreenHeader />
      <Text style={styles.aboutHeading}>About</Text>
      <View styles={styles.Creaters}>
          <TouchableOpacity style={styles.creatercard}>
              <Image style={styles.createrImage} source={require('../../../assets/event.jpeg')} />
              <Text>Aditya Chandrikapure</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.creatercard}>
              <Image style={styles.createrImage} source={require('../../../assets/event.jpeg')} />
              <Text>Aditya Chandrikapure</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.creatercard}>
              <Image style={styles.createrImage} source={require('../../../assets/event.jpeg')} />
              <Text>Aditya Chandrikapure</Text>
          </TouchableOpacity> */}
      </View>
      <Text>Features</Text>
      <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero, magnam omnis doloribus qui debitis. Voluptatum animi, e
          veniet officia accusantium laudantium ipsum sunt, amet dolorem eum quas unde,
           deleniti explicabo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero, magnam omnis doloribus qui debitis. Voluptatum animi, e
          veniet officia accusantium laudantium ipsum sunt, amet dolorem eum quas unde,
           deleniti explicabo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero, magnam omnis doloribus qui debitis. Voluptatum animi, e
          veniet officia accusantium laudantium ipsum sunt, amet dolorem eum quas unde,
           deleniti explicabo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero, magnam omnis doloribus qui debitis. Voluptatum animi, e
          veniet officia accusantium laudantium ipsum sunt, amet dolorem eum quas unde,
           deleniti explicabo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero, magnam omnis doloribus qui debitis. Voluptatum animi, e
          veniet officia accusantium laudantium ipsum sunt, amet dolorem eum quas unde,
           deleniti explicabo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero, magnam omnis doloribus qui debitis. Voluptatum animi, e
          veniet officia accusantium laudantium ipsum sunt, amet dolorem eum quas unde,
           deleniti explicabo.
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    aboutHeading:{
        textAlign:'center',
        fontSize:23,
        fontWeight:'700',
        textDecorationLine:'underline'
    },
    Creaters:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10
    },
    createrImage:{
        height:100,
        width:100,
        borderRadius:50,
    }
})

export default About;