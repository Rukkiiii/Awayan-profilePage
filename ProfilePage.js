import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const ProfilePage = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [settingsVisible, setSettingsVisible] = useState(false);

  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);
  const toggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev);
    Alert.alert(
      'Notification Settings',
      notificationsEnabled ? 'Notifications Disabled' : 'Notifications Enabled'
    );
  };

  const toggleSettings = () => setSettingsVisible((prev) => !prev);
  const handleSignOut = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'OK', 
          onPress: () => navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          }),
        },
      ]
    );
  };

  const openLink = (url) => Linking.openURL(url).catch(err => console.error('An error occurred', err));

  return (
    <ScrollView contentContainerStyle={styles.container(isDarkMode)}>
      {/* Header Section with Sidebar and Notification Icon */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.sidebarIcon}>
          <MaterialIcons name="menu" size={28} color={isDarkMode ? '#fff' : '#333'} />
        </TouchableOpacity>
        <Text style={styles.appTitle}>Profile</Text>
        <TouchableOpacity onPress={toggleNotifications} style={styles.notificationIcon}>
          <MaterialIcons name="notifications" size={28} color={isDarkMode ? '#fff' : '#333'} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={require('./assets/profilepic.png')}
        />
        <Text style={styles.profileName(isDarkMode)}>Roque Awayan</Text>
        <Text style={styles.profileEmail(isDarkMode)}>Front-End Developer</Text>
      </View>

      <View style={styles.infoContainer(isDarkMode)}>
        <Text style={styles.sectionTitle(isDarkMode)}>About Me</Text>
        <Text style={styles.sectionContent(isDarkMode)}>
          Hi, I'm Roque Awayan, a software developer with a passion for creating intuitive and responsive mobile applications.
          I specialize in React Native and have experience in various other technologies.
        </Text>
      </View>

      <View style={styles.infoContainer(isDarkMode)}>
        <Text style={styles.sectionTitle(isDarkMode)}>Contact Information</Text>
        <Text style={styles.sectionContent(isDarkMode)}>Phone: +63 935 290 1784</Text>
        <Text style={styles.sectionContent(isDarkMode)}>Address: Lapasan, CDO City</Text>
        <Text style={styles.sectionContent(isDarkMode)}>Email: @roqueawayan820</Text>
      </View>

      <View style={styles.infoContainer(isDarkMode)}>
        <Text style={styles.sectionTitle(isDarkMode)}>Social Media</Text>
        <View style={styles.socialMediaContainer}>
          <TouchableOpacity onPress={() => openLink('https://www.facebook.com/')}>
            <View style={[styles.iconContainer(isDarkMode), { backgroundColor: '#3b5998' }]}>
              <FontAwesome name="facebook" size={24} color="#fff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://twitter.com/')}>
            <View style={[styles.iconContainer(isDarkMode), { backgroundColor: '#1da1f2' }]}>
              <FontAwesome name="twitter" size={24} color="#fff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/')}>
            <View style={[styles.iconContainer(isDarkMode), { backgroundColor: '#0077b5' }]}>
              <FontAwesome name="linkedin" size={24} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={toggleSettings} style={styles.settingsButton(isDarkMode)}>
        <Text style={styles.settingsButtonText(isDarkMode)}>Settings</Text>
      </TouchableOpacity>

      {settingsVisible && (
        <View style={styles.settingsContainer(isDarkMode)}>
          <TouchableOpacity onPress={toggleNotifications} style={styles.uniqueButton(isDarkMode)}>
            <Text style={styles.buttonText(isDarkMode)}>
              {notificationsEnabled ? 'Disable Notifications' : 'Enable Notifications'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleDarkMode} style={styles.uniqueButton(isDarkMode)}>
            <Text style={styles.buttonText(isDarkMode)}>
              {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton(isDarkMode)}>
        <Text style={styles.signOutButtonText(isDarkMode)}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: (isDarkMode) => ({
    flexGrow: 1,
    paddingVertical: 20,
    backgroundColor: isDarkMode ? '#333' : '#f2f2f2',
    alignItems: 'center',
    marginTop: 20,
  }),
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: 10,
    marginBottom: 20,
  },
  sidebarIcon: {
    padding: 5,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  notificationIcon: {
    padding: 5,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
    width: '90%',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: (isDarkMode) => ({
    fontSize: 24,
    fontWeight: 'bold',
    color: isDarkMode ? '#fff' : '#333',
    marginTop: 10,
  }),
  profileEmail: (isDarkMode) => ({
    fontSize: 16,
    color: isDarkMode ? '#aaa' : '#666',
  }),
  infoContainer: (isDarkMode) => ({
    width: '90%',
    backgroundColor: isDarkMode ? '#444' : '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
  }),
  sectionTitle: (isDarkMode) => ({
    fontSize: 18,
    fontWeight: 'bold',
    color: isDarkMode ? '#fff' : '#333',
    marginBottom: 10,
  }),
  sectionContent: (isDarkMode) => ({
    fontSize: 16,
    color: isDarkMode ? '#ddd' : '#555',
    lineHeight: 22,
  }),
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  iconContainer: (isDarkMode) => ({
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  settingsButton: (isDarkMode) => ({
    marginTop: 20,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#007BFF',
    width: '90%',
    alignItems: 'center',
  }),
  settingsButtonText: (isDarkMode) => ({
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }),
  settingsContainer: (isDarkMode) => ({
    width: '90%',
    marginTop: 10,
  }),
  uniqueButton: (isDarkMode) => ({
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#007BFF',
    width: '100%',
    alignItems: 'center',
  }),
  buttonText: (isDarkMode) => ({
    color: '#fff',
    fontSize: 16,
  }),
  signOutButton: (isDarkMode) => ({
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FF3D3D',
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  }),
  signOutButtonText: (isDarkMode) => ({
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }),
});

export default ProfilePage;
