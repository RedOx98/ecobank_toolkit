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

type RootStackParamList = {
    Login: undefined
    Home: undefined
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




    return (
        <View style={styles.body}>
            LOGIN PAGE
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
        backgroundColor: '#0080ff',
    },
    logo: {
        width: 200,
        height: 150,
        marginTop: 20,
        marginBottom: 10,
    },
    text: {
        color: '#ffffff',
        fontSize: 30,
        marginBottom: 130,
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    },
});

export default Login;