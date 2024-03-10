import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./src/modules/Navigation/components/Tabs";
import LoginPage from "./src/modules/LoginPage/LoginPage";
import SettingsPage from "./src/modules/SettingsPage/SettingsPage";
import NotificationsPage from "./src/modules/NotificationsPage/NotificationsPage";
import { createStackNavigator } from '@react-navigation/stack';
import { loginStore } from './src/store/loginStore';
import { ThemeProvider } from './src/modules/shared/ThemeContext';
import PrivacyPage from "./src/modules/SettingsPage/components/PrivacyPage";

const Stack = createStackNavigator();

export default function App() {

const isLogged = loginStore((state) => state.isLogged);
console.log("isLogged = " + isLogged);

const Stack = createStackNavigator();
    return (
        <ThemeProvider>
            <NavigationContainer>
                <StatusBar barStyle="dark-content" />
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}>
                    {!isLogged ? (
                        <>
                            <Stack.Screen
                                name="Login"
                                component={LoginPage}
                                options={{ headerShown: false }}
                            />
                        </>
                    ) : (
                        <>
                            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
                            <Stack.Screen name="Notifications" component={NotificationsPage} options={{ headerShown: true }} />
                            <Stack.Screen name="Settings" component={SettingsPage} options={{ headerShown: true }} />
                            <Stack.Screen
                                name="PrivacyPage"
                                component={PrivacyPage}
                                options={{
                                    title: 'Confidentialité',
                                    headerShown: true,
                                }}
                            />
                        </>
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
}
