import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    Keyboard.dismiss(); // Dismiss the keyboard
    if (!phoneNumber || !password) {
      Alert.alert('Error', 'Please fill in both fields.');
      return;
    }

    if (phoneNumber === '1' && password === 'p') {
      navigation.replace('Home'); // Navigate to Home Screen on successful login
    } else {
      Alert.alert('Error', 'Invalid phone number or password.');
    }
  };

  // Function to handle phone number input
  const handlePhoneNumberChange = (text) => {
    if (text.length <= 1) {
      setPhoneNumber(text);
    }
    // Automatically dismiss the keyboard and shift focus to the password field
    if (text.length === 10) {
      Keyboard.dismiss(); // Dismiss the keyboard
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Illustration */}
        <Image
          source={require('../Asset/tea.png')} // Replace with your illustration
          style={styles.illustration}
          resizeMode="contain"
        />

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Image source={require('../Asset/telephone.png')} style={styles.icon} />
            <TextInput
              placeholder="Phone number"
              style={styles.input}
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={handlePhoneNumberChange}
              maxLength={10} // Limit input to 10 digits
              returnKeyType="done"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Image source={require('../Asset/password.png')} style={styles.icon} />
            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
              returnKeyType="done"
              onSubmitEditing={handleLogin} // Handle login on "Done" press
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Image
                source={
                  passwordVisible
                    ? require('../Asset/eye.png') // Replace with open eye icon
                    : require('../Asset/eye closed.png') // Replace with closed eye icon
                }
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Sign Up Navigation */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don’t have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signupLink}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
