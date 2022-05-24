import { StatusBar } from "expo-status-bar";
import { Link } from '@react-navigation/native';
import React, { useState } from "react";
import axios from 'axios';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView
} from "react-native";


export default function StudentRegisterScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [registerId, setRegisterId] = useState("");
  const [password, setPassword] = useState("");

  const handleStudentRegister = async () => {
    try {
      const res = await axios.post("http://10.0.2.2:8000/api/student_register/", {
        name: name,
        email: email,
        mobile_no: number,
        register_id: registerId,
        password: password,
        verify_password: password,
      });
      const data = await res.data;
      alert(data.msg);
      props.navigation.navigate('studentLogin');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <ScrollView style={styles.PublicLogin}>
      <View style={styles.PublicLoginTop}>
        <Image
          source={require("../../../../assets/man.png")}
          style={styles.homeImg}
          resizeMode='contain'
        />
        <View style={styles.registerHeadingSection}>
          <Text style={styles.registerHeading}>Register</Text>
          <Text style={styles.registerPara}>Register as student enjoy to enjoy the app</Text>

        </View>
      </View>

      <View style={styles.PublicLoginBottom}>
        <TextInput onChangeText={value => setName(value)} value={name} placeholder="Name" style={styles.input} />
        <TextInput onChangeText={value => setRegisterId(value)} value={registerId} placeholder="Register Id" style={styles.input} />
        <TextInput onChangeText={value => setEmail(value)} value={email} placeholder="Email" style={styles.input} />
        <TextInput onChangeText={value => setNumber(value)} value={number} placeholder="Mobile No." style={styles.input} />
        <TextInput onChangeText={value => setPassword(value)} value={password} placeholder="Password" style={styles.input} />

        {/* <Text style={styles.forgotText}>Forgot Password ?</Text> */}

        <View style={styles.loginButtonWrapper}>
          <TouchableOpacity onPress={handleStudentRegister}>
            <Text style={styles.loginButtonText}>Register</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.bottomText}>
            Already have an account ?{" "}
            <Link to='/studentLogin'><Text style={styles.createOne}>Login</Text></Link>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  PublicLoginBottom: {
    justifyContent: "center",
    alignItems: "center",
  },
  PublicLoginTop: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  registerHeadingSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  registerHeading: {
    fontWeight: '700',
    fontSize: 30,
  },
  registerPara: {
    color: 'gray',
  },
  homeImg: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: "10%",
  },
  input: {
    width: "80%",
    margin: 10,
    height: 45,
    borderColor: "#3A1347",
    borderWidth: 1.5,
    borderRadius: 5,
    paddingVertical: 10,
    fontWeight: '600',
    paddingHorizontal: 20,
    shadowColor: '#3A1347',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.35,
    shadowRadius: 0.5,
    elevation: 2
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
    marginBottom: 7,
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
