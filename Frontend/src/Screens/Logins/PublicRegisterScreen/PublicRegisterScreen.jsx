import { StatusBar } from "expo-status-bar";
import React,{useState,useEffect} from "react";
import { Link ,navigation} from '@react-navigation/native';
import axios from "axios";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView
} from "react-native";

import { AuthContext } from "../../../component/context";

export default function PublicRegisterScreen(props) 
{
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");


    const RegisterHandle = async () =>{
      try{
          const res = await axios.post('http://10.0.2.2:8000/api/public_register/',{
            name:name,
            email:email,
            mobile_no:number,
            password:password,
            verify_password:password,
          });
          const data = await res.data;
          alert(data.msg);
          props.navigation.navigate('publicLogin');
      } catch (err){
        alert(err.message);
      }

    };


  return (
    <ScrollView style={styles.PublicLogin}>
      <View style={styles.PublicLoginTop}>
        <Image
          source={require("../../../../assets/login.png")}
          style={styles.homeImg}
          resizeMode='contain'
        />
          <View style={styles.publicRegisterHeadingSection}>
            <Text style={styles.publicRegisterHeading}>Register</Text>
            <Text style={styles.publicRegisterPara}>Register as public and enjoy the app</Text>
        </View>
      </View>

      <View style={styles.PublicLoginBottom}>
        <TextInput placeholder="Name" onChangeText={value => setName(value)} value={name} style={styles.input} />
        <TextInput placeholder="Email" onChangeText={value => setEmail(value)} value={email}  style={styles.input} />
        <TextInput placeholder="Mobile No." onChangeText={value => setNumber(value)} value={number}  style={styles.input} />
        <TextInput placeholder="Password" onChangeText={value => setPassword(value)} value={password} type={'password'}  style={styles.input} />

        <View style={styles.loginButtonWrapper}>
          <TouchableOpacity onPress={RegisterHandle}>
            <Text style={styles.loginButtonText}>Register</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.bottomText}>
            Already have an account ?{" "}
            <Link to='/publicLogin'><Text style={styles.createOne}>Login</Text></Link>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  PublicLoginTop: {
    alignItems: "center",
  },
  PublicLoginBottom: {
    justifyContent: "center",
    alignItems: "center",
  },
  publicRegisterHeadingSection:{
    alignItems:'center',
    margin:20,
  },
  publicRegisterHeading:{
    fontWeight:'700',
    fontSize:30,
  },
  publicRegisterPara:{
    color:'gray',
  },
  homeImg: {
    width: 150,
    height: 150,
    borderRadius : 10,
    marginHorizontal: 20,
    marginTop: 80,
  },
  input: {
    width: "80%",
    margin: 10,
    height: 45,
    borderColor: "#3A1347",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  forgotText: {
    width: "80%",
    textAlign: "right",
  },
  loginButtonWrapper: {
    width: "80%",
  },
  loginButtonText: {
    width: "100%",
    backgroundColor: "#3A1347",
    marginVertical: 10,
    marginBottom : 7,
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
