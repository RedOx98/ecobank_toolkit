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
    CustomerComplaint: undefined
};

type CustomerComplaintNavigationProp = StackNavigationProp<RootStackParamList, 'CustomerComplaint'>

type CustomerComplaintProps = {
    navigation: CustomerComplaintNavigationProp;
    route: RouteProp<RootStackParamList, 'CustomerComplaint'>;
};

function CustomerComplaint({ navigation, route }: CustomerComplaintProps): JSX.Element {


    useEffect(() => {
        //Call your function inside here
    }, []);

    return (
        <View style={styles.body}>

            <Text>CUSTOMER COMPLAINT PAGE</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0080ff',
    },
});

export default CustomerComplaint;