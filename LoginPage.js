import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Ensure FontAwesome is installed

const LoginPage = ({ navigation, registeredUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // State to track password visibility

  const handleLogin = () => {
    if (registeredUser && username === registeredUser.username && password === registeredUser.password) {
      navigation.navigate('Profile');
    } else {
      Alert.alert('Error', 'Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.agreementText}>
        By signing in you are agreeing to our <Text style={styles.linkText}>Terms and privacy policy</Text>
      </Text>

      <View style={styles.tabContainer}>
        <TouchableOpacity>
          <Text style={[styles.tabText, styles.activeTab]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.tabText}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="#888" style={styles.icon} />
        <TextInput
          placeholder="Username"  // Placeholder text for username
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="#888" style={styles.icon} />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisible} // Toggle based on state
          style={styles.input}
        />
        <TouchableOpacity style={styles.eyeIcon} onPress={() => setPasswordVisible(!passwordVisible)}>
          <FontAwesome name={passwordVisible ? "eye-slash" : "eye"} size={20} color="#888" />
        </TouchableOpacity>
      </View>

      <View style={styles.rememberContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('PasswordRecovery')}>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or connect with</Text>

      <View style={styles.socialContainer}>
        <FontAwesome name="facebook" size={30} color="#3b5998" style={styles.socialIcon} />
        <FontAwesome name="instagram" size={30} color="#E1306C" style={styles.socialIcon} />
        <FontAwesome name="pinterest" size={30} color="#BD081C" style={styles.socialIcon} />
        <FontAwesome name="linkedin" size={30} color="#0077B5" style={styles.socialIcon} />
      </View>

      <TouchableOpacity style={styles.touchIDButton}>
        <Text style={styles.touchIDText}>Login with touch</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16, backgroundColor: '#f9f9f9' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  agreementText: { fontSize: 12, color: '#666', textAlign: 'center', marginBottom: 20 },
  linkText: { color: '#007BFF' },
  tabContainer: { flexDirection: 'row', marginBottom: 20 },
  tabText: { fontSize: 18, padding: 10 },
  activeTab: { color: '#007BFF', borderBottomWidth: 2, borderBottomColor: '#007BFF' },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#ccc', borderRadius: 5, width: '80%', padding: 10, marginVertical: 10 },
  icon: { marginRight: 10 },
  input: { flex: 1, padding: 5 },
  eyeIcon: { paddingHorizontal: 10 },
  rememberContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%', marginBottom: 20 },
  forgotPassword: { color: '#007BFF' },
  loginButton: { backgroundColor: '#008CBA', padding: 15, borderRadius: 5, width: '80%', alignItems: 'center', marginBottom: 20 },
  loginButtonText: { color: '#fff', fontWeight: 'bold' },
  orText: { fontSize: 14, color: '#666', marginBottom: 20 },
  socialContainer: { flexDirection: 'row', justifyContent: 'space-around', width: '60%', marginBottom: 30 },
  socialIcon: { marginHorizontal: 10 },
  touchIDButton: { alignItems: 'center', marginBottom: 30 },
  touchIDText: { color: '#007BFF', fontSize: 16 },
});

export default LoginPage;
