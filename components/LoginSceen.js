import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState(false)

  const navigation = useNavigation();
  const id = useRoute().params.id;
  console.log(id)
  const handleRegister = () => {
    Alert.alert(
      "Redirecting to Registration",
      `${username}`,
      [
        { text: "OK", onPress: navigateToRegister }
      ]
    );
  }

  const navigateToRegister = () => {
    navigation.navigate('RegistrationPage');
  }
  const navigateToHome = () => {
    navigation.navigate('Home');
  }

  const handleLogin = () => {
    // if (!username, !password) {
    //   return Alert.alert("Please fill all the details...")
    // } else 
    {
      Alert.alert(
        "Welcome Home ;)",
        `${username}`,
        [
          { text: "OK", onPress: navigateToHome }
        ]
      );
    }
  }

  const toggleMode = () => {
    setMode(!mode)
  }

  return (
    <View style={{
      ...mystyle.container,
      backgroundColor: mode ? '#002' : '#fff'
    }}>
      <View style={mystyle.topRightButton}>
        <Button title={mode === true ? 'DAY MODE' : 'NIGHT MODE'} onPress={toggleMode} />
      </View>
      <Text style={mystyle.text}>Username</Text>
      <TextInput
        style={mystyle.input}
        placeholder="Full Name"
        value={username}
        onChangeText={setUsername}
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
        <Button title="SignIn" onPress={handleLogin} />
        <View style={mystyle.buttonSpacing} />
        <Button title="SignUp" onPress={handleRegister} />
      </View>
    </View>

  );
};

export default LoginPage

const mystyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    textAlign: 'left',
    backgroundColor: "red"
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