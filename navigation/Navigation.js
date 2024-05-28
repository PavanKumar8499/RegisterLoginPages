import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import App from '../App';
import LoginPage from '../components/LoginSceen';
import Home from '../components/HomeContents/HomeMain';

const Stack = createStackNavigator();

const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="RegistrationPage"
                    options={{
                        headerShown: false
                    }}
                    component={App} />
                <Stack.Screen name="LoginPage" component={LoginPage} />
                <Stack.Screen name="Home"
                    options={{
                        headerShown: false
                    }}
                    component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Main;
