import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import CountryPicker from "react-native-country-picker-modal"; // Import the country picker

export default function SignUp() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState(null); // State to hold the selected country
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showCountryPicker, setShowCountryPicker] = useState(false); // State to toggle country picker

  const handleSelectCountry = (country) => {
    setCountry(country);
    setShowCountryPicker(false); // Hide the picker after selection
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.imageContainer}>
        {/* Background Image */}
        <ImageBackground
          source={require("../../assets/splashAssets/splash.png")}
          style={styles.image}
          blurRadius={2.5}
        >
          <View
            style={{
              height: 100,
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            {/* Back button */}
            <BlurView
              style={{
                width: 44,
                height: 44,
                justifyContent: "center",
                borderRadius: 36,
                marginLeft: "5%",
                overflow: "hidden",
              }}
            >
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color="#1E1E1E"
                  style={{ alignSelf: "center" }}
                />
              </Pressable>
            </BlurView>

            {/* Elegancia heading */}
            <View
              style={{
                flex: 1,
                position: "absolute",
                width: "100%",
              }}
            >
              <Text style={[styles.eleganciaHeading]}>Elegancia</Text>
            </View>
          </View>

          {/* SignUp Container */}
          <BlurView
            style={styles.blurViewContainer}
            intensity={100}
            tint="default"
            experimentalBlurMethod="dimezisBlurView"
          >
            <Text style={[styles.createAccountHeading]}>Create Account</Text>

            {/* SignUp form section */}
            <View style={styles.signUpFormSection}>
              {/* Name label and input field */}
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={[
                  styles.nameInput,
                  isNameFocused && {
                    borderColor: "#fff",
                    backgroundColor: "#fff",
                  },
                ]}
                placeholder="Enter Your Name"
                placeholderTextColor="#4e4e4e"
                selectionColor={"#000"}
                cursorColor={"#4e4e4e"}
                value={name}
                onChangeText={setName}
                onFocus={() => setIsNameFocused(true)}
                onBlur={() => setIsNameFocused(false)}
                keyboardType="name-phone-pad"
              />

              {/* Email label and input field */}
              <Text style={[styles.label, styles.marginTop]}>Email</Text>
              <TextInput
                style={[
                  styles.emailInput,
                  isEmailFocused && {
                    borderColor: "#fff",
                    backgroundColor: "#fff",
                  },
                ]}
                placeholder="Enter Your Email"
                placeholderTextColor="#4e4e4e"
                selectionColor={"#000"}
                cursorColor={"#4e4e4e"}
                value={email}
                onChangeText={setEmail}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                keyboardType="email-address"
              />

              {/* Phone label and input field */}
              <Text style={styles.label}>Phone number</Text>
              {/* <Pressable onPress={() => setShowCountryPicker(true)}>
                <View style={styles.countryPickerContainer}>
                  <Text style={styles.countryText}>
                    {country ? country.name : "Select Country"}
                  </Text>
                </View>
              </Pressable> */}
              <TextInput
                style={[
                  styles.phoneNumberInput,
                  isPhoneNumberFocused && {
                    borderColor: "#fff",
                    backgroundColor: "#fff",
                  },
                ]}
                placeholder="Enter Your Phone Number"
                placeholderTextColor="#4e4e4e"
                selectionColor={"#000"}
                cursorColor={"#4e4e4e"}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                onFocus={() => setIsPhoneNumberFocused(true)}
                onBlur={() => setIsPhoneNumberFocused(false)}
                keyboardType="name-phone-pad"
              />

              {/* Password label and input field */}
              <Text style={[styles.label, styles.marginTop]}>Password</Text>
              <TextInput
                style={[
                  styles.passwordInput,
                  isPasswordFocused && {
                    borderColor: "#fff",
                    backgroundColor: "#fff",
                  },
                ]}
                placeholder="Enter Password"
                placeholderTextColor="#4e4e4e"
                selectionColor={"#000"}
                cursorColor={"#004e4e4e"}
                value={password}
                onChangeText={setPassword}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                secureTextEntry
              />
            </View>

            <View
              style={{
                width: "80%",
                alignSelf: "center",
                marginTop: "46%",
              }}
            >
              <Pressable
                onPress={() => navigation.navigate("SignUp")}
                style={{
                  flexDirection: "row",
                  marginBottom: "2%",
                }}
              >
                <Text style={{ fontWeight: "medium", color: "#DCDCDB" }}>
                  I have an account?{" "}
                </Text>
                <Pressable onPress={() => navigation.navigate("SignUp")}>
                  <Text style={{ fontWeight: "bold", color: "#fff" }}>
                    Login
                  </Text>
                </Pressable>
              </Pressable>
              <Pressable
                style={{
                  backgroundColor: "#3AA2ED",
                  height: 48,
                  justifyContent: "center",
                  borderRadius: 33,
                }}
                // onPress={handleLogin}
              >
                <Text style={[styles.buttonText]}>Sign up</Text>
              </Pressable>
            </View>
          </BlurView>
        </ImageBackground>
      </View>

      {/* Country Picker Modal */}
      {/* <CountryPicker
        visible={showCountryPicker}
        withFilter
        withFlag
        withAlphaFilter
        withCallingCode
        onSelect={handleSelectCountry}
        onClose={() => setShowCountryPicker(false)}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "80%",
  },
  image: {
    flex: 1,
  },
  eleganciaHeading: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#1E1E1E",
    alignSelf: "center",
  },
  blurViewContainer: {
    width: "100%",
    height: "76%",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    overflow: "hidden",
  },
  welcomeHeading: {
    fontSize: 30,
    color: "#1E1E1E",
    alignSelf: "center",
    marginTop: 20,
  },
  createAccountHeading: {
    fontSize: 30,
    color: "#1E1E1E",
    alignSelf: "center",
    marginTop: 20,
  },
  signUpFormSection: {
    justifyContent: "center",
    width: "85%",
    alignSelf: "center",
    marginTop: "10%",
  },
  label: {
    color: "#1E1E1E",
    fontSize: 16,
    marginBottom: 5,
  },
  marginTop: {
    marginTop: 10,
  },
  nameInput: {
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
    height: 48,
    borderColor: "#6F7072",
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "transparent",
    color: "#1E1E1E",
  },
  emailInput: {
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
    height: 48,
    borderColor: "#6F7072",
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "transparent",
    color: "#1E1E1E",
  },
  phoneNumberInput: {
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
    height: 48,
    borderColor: "#6F7072",
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "transparent",
    color: "#1E1E1E",
  },
  passwordInput: {
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
    height: 48,
    borderColor: "#6F7072",
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "transparent",
    color: "#1E1E1E",
  },
  button: {
    backgroundColor: "#3AA2ED",
    height: 48,
    justifyContent: "center",
    width: "85%",
    borderRadius: 36,
    alignSelf: "center",
    marginTop: "47%",
  },
  buttonText: {
    fontWeight: "medium",
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontFamily: "GolosText",
  },
  countryPickerContainer: {
    height: 48,
    borderColor: "#6F7072",
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "transparent",
  },
  countryText: {
    color: "#1E1E1E",
    fontWeight: "bold",
  },
});
