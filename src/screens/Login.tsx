/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */

import React, { useEffect, useState } from 'react';
import {

    StyleSheet,
    Image,
    Text,
    View,
    Alert,
} from 'react-native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';

import { RouteProp } from '@react-navigation/native';
import Globalstyle from '../utils/Globalstyle';
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from '../utils/CustomButton';

type RootStackParamList = {
    Login: undefined
    ServicePage: undefined
};

type LoginNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>

type LoginProps = {
    navigation: LoginNavigationProp;
    route: RouteProp<RootStackParamList, 'Login'>;
};



function Login({ navigation, route }: LoginProps): JSX.Element {
    type LoginProp = {
        username: string;
        password: number;
    };


    useEffect(() => {
        // call your functions inside this body
    }, []);

    const gotoHome = () => {
        navigation.navigate('ServicePage');
    };




    return (
        <View style={styles.body}>
            <Image
                style={styles.logo}
                source={require('../../assets/eco.png')}
            />
            <Text style={[styles.text, Globalstyle.CustomFontH]}>STAFF UTILITY APP</Text>

            <TextInput
            placeholder="Email address"
            style={[styles.input, Globalstyle.CustomFontInput]} placeholderTextColor="#23557F"
            />
            <TextInput
            placeholder="Password"
            style={[styles.input, Globalstyle.CustomFontInput]} placeholderTextColor="#23557F"
            secureTextEntry
            />

            <CustomButton title="Login" color="#23557F" onPressHandler={gotoHome}/>

            <Text
            style={[styles.textbot, Globalstyle.CustomFontHighlight]}
            >Do not have an account?</Text>
            <Text style={[styles.textbot, Globalstyle.CustomFontHighlight]}>contact administrator</Text>

            <Text style={[styles.footer, Globalstyle.CustomFontHighlight]}>Ecobank Nigeria @ 2023</Text>
        </View>
    );
}

/**
 * The top nav should have welcome USER and logout with logout icon.
 * The bottom nav should have four distinct navigation symbols linking to four direct pages for the USER quick access
 * Inputs for this page will be username and password to be sent over API.
 */


const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    logo: {
        width: 287,
        height: 140,
        margin: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    text: {
        color: '#23557F',
        fontSize: 24,
        marginTop: -15,
    },
    textbot: {
        color: '#23557F',
        margin: 10,
    },
    footer: {
        color: '#23557F',
        fontSize: 18,
        margin: 90,
    },
    input: {
        width: 300,
        borderWidth: 2,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
        marginTop: 55,
        color: '#000000',
    },
});

export default Login;