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
    TransactionHistory: undefined
};

type TransactionHistoryNavigationProp = StackNavigationProp<RootStackParamList, 'TransactionHistory'>

type TransactionHistoryProps = {
    navigation: TransactionHistoryNavigationProp;
    route: RouteProp<RootStackParamList, 'TransactionHistory'>;
};

function TransactionHistory({ navigation, route }: TransactionHistoryProps): JSX.Element {


    useEffect(() => {
        //Call your function inside here
    }, []);

    return (
        <View style={styles.body}>
            {/* <Image
                style={styles.logo}
                source={require('../../assets/Redux.png')}
            /> */}
            <Text>TRANSACTION HISTORY PAGE</Text>
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

export default TransactionHistory;