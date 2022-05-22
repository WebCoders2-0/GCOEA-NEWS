import { Link } from '@react-navigation/native';
import {StatusBar} from 'react-native';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView
} from "react-native";

export default function StudentLoginScreen() {

  return (
    <ScrollView style={styles.PublicLogin}>
      <View style={styles.PublicLoginTop}>
        <Image
          source={require("../../../../assets/man.png")}
          style={styles.homeImg}
          resizeMode='contain'
        />
      </View>
      <View style={styles.LoginHeadingContainer}>
        <Text style={styles.loginHeading}>Login</Text>
        <Text style={styles.loginPara}>login as a student and enjoy the news</Text>
      </View>

      <View style={styles.PublicLoginBottom}>
        <TextInput placeholder="Register Id" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />

        <Text style={styles.forgotText}>Forgot Password ?</Text>

        <View style={styles.loginButtonWrapper}>
          <TouchableOpacity>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.bottomText}>
            Don't have an account ?{" "}
            <Link to='/studentRegister'><Text style={styles.createOne}>Create One</Text></Link>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  PublicLogin: {
    paddingTop:StatusBar.currentHeight ,
    marginTop:50,
  },
  PublicLoginTop: {
    justifyContent: "center",
    alignItems: "center",
  },
  PublicLoginBottom: {
    justifyContent: "center",
    alignItems: "center",
    marginTop:10,
  },
  homeImg: {
    height: 200,
    borderRadius : 10,
    marginHorizontal: 20,
  },
  LoginHeadingContainer:{
    justifyContent:'center',
    alignItems:'center',
    padding:20
  },
  loginHeading:{
    fontWeight:'700',
    fontSize:30,
  },
  loginPara:{
    color:'gray'
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
