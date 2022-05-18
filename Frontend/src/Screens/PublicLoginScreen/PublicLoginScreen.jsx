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

export default function PublicLoginScreen() {
  return (
    <View style={styles.PublicLogin}>
      <View style={styles.PublicLoginTop}>
        <Image
          source={require("../../../assets/undraw_secure_login_pdn4.png")}
          style={styles.homeImg}
        />
      </View>

      <View style={styles.PublicLoginBottom}>
        <TextInput placeholder="Email or Username" style={styles.input} />
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
            <Link to={{screen : 'Public Register'}}><Text style={styles.createOne}>Create One</Text></Link>
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
    justifyContent: "center",
    alignItems: "center",
  },
  PublicLoginBottom: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  homeImg: {
    width: "70%",
    height: "70%",
    borderRadius : 10,
    marginHorizontal: 20,
    marginTop: "25%",
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
