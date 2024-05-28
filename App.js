import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
const App = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState(false)

  const navigation = useNavigation()
  const isDarkMode = useColorScheme() === 'dark';


  const handleRegister = () => {
    Alert.alert(
      "Thank you for registration",
      `${username}`,
      [
        { text: "OK", onPress: navigateToLogin }
      ]
    );
  };

  const navigateToLogin = () => {
    navigation.navigate('LoginPage',{id:123});
  };

  const handleLogin = () => {
    Alert.alert("Loading Login Page",
    ``,
      [{ text: "OK", onPress: navigateToLogin }]
    );
  }

  const toggleMode = () => {
    setMode(!mode)
  }

  return (
    <View style={{
      ...mystyle.container,
      backgroundColor: mode ? '#002' : '#fff'
    }}>
      <View style={mystyle.topRightButton} >
        <Button title={mode === true ? 'DAY MODE' : 'NIGHT MODE'} onPress={toggleMode} />
      </View>
      <Text style={mystyle.text}>Full Name</Text>
      <TextInput
        style={mystyle.input}
        placeholder="Full Name"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor={mystyle.input.placeholderTextColor}
      />
      <Text style={mystyle.text}>Email</Text>
      <TextInput
        style={mystyle.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor={mystyle.input.placeholderTextColor}

      />
      <Text style={mystyle.text}>Password</Text>
      <TextInput
        style={mystyle.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        placeholderTextColor={mystyle.input.placeholderTextColor}
      />
      <View style={mystyle.buttonContainer}>
        <Button title="Register" onPress={handleRegister} />
        <View style={mystyle.buttonSpacing} />
        <Button title="Back To Login" onPress={handleLogin} />
      </View>

    </View>
  );
};
export default App

const mystyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    textAlign: 'left'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    alignSelf: 'flex-start'
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    zIndex: 1,
    cursor: 'pointer',
    color: '#000',
    placeholderTextColor: 'gray'
  },
  buttonContainer: {
    flexDirection: 'row'
    , justifyContent: 'space-between'
    , marginTop: 50
  },
  buttonSpacing: {
    width: 50
  },
  topRightButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  }
})