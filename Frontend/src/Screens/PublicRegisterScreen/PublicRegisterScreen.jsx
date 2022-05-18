import { StatusBar } from "expo-status-bar";
import { Link } from '@react-navigation/native';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

export default function PublicRegisterScreen() {
  // const Stack = createNativeStackNavigator();

  return (
    <View style={styles.PublicLogin}>
      <View style={styles.PublicLoginTop}>
        <Image
          source={require("./../../../assets/undraw_Mobile_login_re_9ntv.png")}
          style={styles.homeImg}
        />
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
            <Link to={{screen : 'Public Login'}}><Text style={styles.createOne}>Login</Text></Link>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  PublicLogin: {
    flex: 1,
  },
  PublicLoginTop: {
    flex: 1,
    alignItems: "center",
  },
  PublicLoginBottom: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  homeImg: {
    width: "50%",
    height: "65%",
    borderRadius : 10,
    marginHorizontal: 20,
    marginTop: "15%",
  },
  input: {
    width: "80%",
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
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
