// PasswordRecoveryPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const PasswordRecoveryPage = ({ navigation, registeredUser, setRegisteredUser }) => {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handlePasswordReset = () => {
    if (!username || !newPassword || !confirmNewPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (username !== registeredUser.username) {
      Alert.alert('Error', 'Username not found');
      return;
    }

    if (newPassword !== confirmNewPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    // Update the registeredUser's password
    setRegisteredUser({ ...registeredUser, password: newPassword });
    Alert.alert('Success', 'Password reset successful! You can now log in with your new password.');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password Recovery</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        style={styles.input}
        secureTextEntry
      />
      <TextInput
        placeholder="Confirm New Password"
        value={confirmNewPassword}
        onChangeText={setConfirmNewPassword}
        style={styles.input}
        secureTextEntry
      />
      <TouchableOpacity onPress={handlePasswordReset} style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '80%', padding: 10, marginVertical: 10, borderColor: '#ccc', borderWidth: 1, borderRadius: 5 },
  resetButton: { marginTop: 20, padding: 12, backgroundColor: '#007BFF', borderRadius: 5, width: '80%', alignItems: 'center' },
  resetButtonText: { color: '#fff', fontWeight: 'bold' },
});

export default PasswordRecoveryPage;
