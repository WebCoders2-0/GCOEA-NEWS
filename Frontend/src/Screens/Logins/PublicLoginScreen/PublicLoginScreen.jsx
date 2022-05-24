import React,{useState,useEffect} from 'react';
import { Link } from '@react-navigation/native';

import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput,ScrollView} from "react-native";

import { AuthContext } from '../../../component/context';

export default function PublicLoginScreen(props) 
{

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const { publicLoginHandle } = React.useContext(AuthContext);

  return (
    <ScrollView style={styles.PublicLogin}>
      <View style={styles.PublicLoginTop}>
        <Image
          source={require("../../../../assets/login.png")}
          style={styles.homeImg}
          resizeMode='contain'
        />

        <View style={styles.publicLoginHeadingSection}>
          <Text style={styles.publicLoginHeading}>Login</Text>
          <Text style={styles.publicLoginPara}>Login as public and enjoy the app</Text>
        </View>
      </View>

      <View style={styles.PublicLoginBottom}>
        <TextInput placeholder="Email or Username" onChangeText={value => setUsername(value)} value={username} style={styles.input} />
        <TextInput placeholder="Password" onChangeText={value => setPassword(value)} value={password}  style={styles.input} />

        <Text style={styles.forgotText}>Forgot Password ?</Text>

        <View style={styles.loginButtonWrapper}>
          <TouchableOpacity onPress={() => publicLoginHandle(username,password)}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.bottomText}>
            Don't have an account ?{" "}
            <Link to='/publicRegister'><Text style={styles.createOne}>Create One</Text></Link>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  PublicLoginTop: {
    justifyContent: "center",
    alignItems: "center",
  },
  publicLoginHeadingSection:{
    alignItems:'center',
    margin:20
  },
  publicLoginHeading:{
    fontWeight:'700',
    fontSize:30,
  },
  publicLoginPara:{
    color:'gray',
  },
  PublicLoginBottom: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeImg: {
    width: 180,
    height: 180,
    borderRadius : 10,
    marginHorizontal: 20,
    marginTop: "25%",
  },
  input: {
    width: "80%",
    margin: 10,
    height: 50,
    borderColor: "#3A1347",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#3A1347',
    shadowOffset: {
        width: 0,
        height: 5
    },
    shadowOpacity: 0.35,
    shadowRadius: 0.5,
    elevation: 3
  },
  forgotText: {
    width: "80%",
    textAlign: "right",
    color:'blue'
  },
  loginButtonWrapper: {
    width: "80%",
  },
  loginButtonText: {
    width: "100%",
    backgroundColor: "#3A1347",
    marginVertical: 20,
    color: "white",
    textAlign: "center",
    paddingVertical: 15,
    borderRadius: 5,
    fontSize: 16,
    fontWeight: "500",
  },
  bottomText: {
    fontSize: 16,
    marginTop: 10,
  },
  createOne: {
    color: "blue",
  },
});
