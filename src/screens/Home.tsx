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
    Home: undefined
    Login: undefined
};

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

type HomeProps = {
    navigation: HomeNavigationProp;
    route: RouteProp<RootStackParamList, 'Home'>;
};

function Home({ navigation, route }: HomeProps): JSX.Element {


    useEffect(() => {
        //Call your function inside here
    }, []);

    return (
        <View style={styles.body}>
            <Text>HOMEPAGE</Text>
        </View>
    );
}

/**
 * The top nav should have welcome USER and logout with logout icon.
 * The bottom nav should have four distinct navigation symbols linking to four direct pages for the USER quick access
 *
 *
 * The following input parameters list should appear on clicking the Quick Link button
 * Send Statement Button and on clicking this takes the user to the Send statement page.
 * Bank Short Codes Button and on clicking this takes the user to the Short Codes page.
 *
 * On clicking the Log Customer Complaint Button it should take the user to the Log Complaint page.
 *
 *
 * The following input parameters should appear on clicking the Customer Info button
 *BVN
 *Name
 *Account Number
 *Phone No.
 *Email Address
 *And finally A SEARCH button speaking the API
 */


const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0080ff',
    },
});

export default Home;