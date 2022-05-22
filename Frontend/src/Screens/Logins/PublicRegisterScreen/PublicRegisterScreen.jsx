import { StatusBar } from "expo-status-bar";
import { Link } from '@react-navigation/native';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView
} from "react-native";

export default function PublicRegisterScreen() {
  // const Stack = createNativeStackNavigator();

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
        <TextInput placeholder="Name" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Mobile No." style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />

        <View style={styles.loginButtonWrapper}>
          <TouchableOpacity>
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
