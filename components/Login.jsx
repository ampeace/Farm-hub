import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Illustration */}
      <Image
        source={require('../Asset/tea.png')} // Replace with your image path
        style={styles.illustration}
        resizeMode="contain"
      />

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Image
            source={require('../Asset/telephone.png')} // Replace with your phone icon
            style={styles.icon}
          />
          <TextInput
            placeholder="Phone number"
            style={styles.input}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Image
            source={require('../Asset/password.png')} // Replace with your lock icon
            style={styles.icon}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Image
              source={
                passwordVisible
                  ? require('../Asset/eye.png') // Eye open icon
                  : require('../Asset/eye closed.png') // Eye closed icon
              }
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Social Media Buttons */}
      <Text style={styles.connectText}>or</Text>
      <Text style={styles.connectText}>Connect using</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity>
          <Image
            source={require('../Asset/google.png')} // Google icon
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../Asset/facebook.png')} // Facebook icon
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Sign Up */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don’t have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signupLink}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  illustration: {
    width: '80%',
    height: 150,
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Light gray input background
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 50,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#6C757D', // Gray text
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#6FBF73', // Green color
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  connectText: {
    color: '#6C757D',
    fontSize: 14,
    marginBottom: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  signupContainer: {
    flexDirection: 'row',
  },
  signupText: {
    color: '#6C757D',
    fontSize: 14,
  },
  signupLink: {
    color: '#6FBF73', // Green link color
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
