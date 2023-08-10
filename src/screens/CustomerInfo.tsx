/* eslint-disable prettier/prettier */

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
    ScrollView,
    Pressable,
    TextInput,
} from 'react-native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Navbar from '../utils/Navbar';
import Globalstyle from '../utils/Globalstyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



type RootStackParamList = {
    CustomerInfo: undefined
    ShortCodes: undefined
    Statement: undefined
    TransactionHistory: undefined
    Navbar: undefined
    Login: undefined
};

type CustomerInfoNavigationProp = StackNavigationProp<RootStackParamList, 'CustomerInfo'>

type CustomerInfoProps = {
    navigation: CustomerInfoNavigationProp;
    route: RouteProp<RootStackParamList, 'CustomerInfo'>;
};

function CustomerInfo({ navigation, route }: CustomerInfoProps): JSX.Element {

    const gotoStatement = () => {
        navigation.navigate('Statement');
    };

    const gotoTransactionHistory = () => {
        navigation.navigate('TransactionHistory');
    };

    const gotoLogin = () => {
        navigation.navigate('Login');
    };


    useEffect(() => {
        //Call your function inside here
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Navbar onPressHandler={gotoLogin}/>
            <ScrollView
                style={styles.horizontal}
                horizontal
            >
                <View style={styles.horizontal_body}>
                    {/* <View style={styles.scroll_image}>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/ecos.png')}
                        />
                    </View> */}
                    <View style={styles.customerinfo}>
                        <View style={styles.customertext}>
                            <View style={styles.left}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Cust. Name: </Text>
                            </View>
                            <View style={styles.right}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderV]}> O Onimole</Text>
                            </View>
                        </View>
                        <View style={styles.customertext}>
                            <View style={styles.left}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Acct No: </Text>
                            </View>
                            <View style={styles.right}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderV]}> 123456789</Text>
                            </View>
                        </View>
                        <View style={styles.customertext}>
                            <View style={styles.left}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Cust. No: </Text>
                            </View>
                            <View style={styles.right}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderV]}> 123233</Text>
                            </View>
                        </View>
                        <View style={styles.customertext}>
                            <View style={styles.left}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Acct. Type: </Text>
                            </View>
                            <View style={styles.right}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderV]}> Current</Text>
                            </View>
                        </View>
                        <View style={styles.customertext}>
                            <View style={styles.left}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Tier: </Text>
                            </View>
                            <View style={styles.right}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderV]}> 3</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.customerinfo}>
                    <View style={styles.customertext}>
                            <View style={styles.left}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Cust. Name: </Text>
                            </View>
                            <View style={styles.right}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderV]}> O Hammed</Text>
                            </View>
                        </View>
                        <View style={styles.customertext}>
                            <View style={styles.left}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Acct No: </Text>
                            </View>
                            <View style={styles.right}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderV]}> 123456789</Text>
                            </View>
                        </View>
                        <View style={styles.customertext}>
                            <View style={styles.left}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Cust. No: </Text>
                            </View>
                            <View style={styles.right}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderV]}> 123233</Text>
                            </View>
                        </View>
                        <View style={styles.customertext}>
                            <View style={styles.left}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Acct Type: </Text>
                            </View>
                            <View style={styles.right}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderV]}> Current</Text>
                            </View>
                        </View>
                        <View style={styles.customertext}>
                            <View style={styles.left}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Tier: </Text>
                            </View>
                            <View style={styles.right}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderV]}> 3</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.body}>
                {/* <Image
                style={styles.logo}
                source={require('../../assets/Redux.png')}
            /> */}
                <Text>CUSTOMER INFORMATION PAGE</Text>
                <View style={styles.customerinfomid}>
                    <View style={styles.customertextmid}>
                            <View style={styles.leftmid}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Email: </Text>
                            </View>
                            <View style={styles.rightmid}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderV]}> Ola******@e*******.com</Text>
                            </View>
                        </View>
                        <View style={styles.customertextmid}>
                            <View style={styles.leftmid}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Acct No: </Text>
                            </View>
                            <View style={styles.rightmid}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderV]}> 123456789</Text>
                            </View>
                        </View>
                        <View style={styles.customertextmid}>
                            <View style={styles.leftmid}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Cust. No: </Text>
                            </View>
                            <View style={styles.rightmid}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderV]}> 123233</Text>
                            </View>
                        </View>
                        <View style={styles.customertextmid}>
                            <View style={styles.leftmid}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Acct Type: </Text>
                            </View>
                            <View style={styles.rightmid}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderV]}> Current</Text>
                            </View>
                        </View>
                        <View style={styles.customertextmid}>
                            <View style={styles.leftmid}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Tier: </Text>
                            </View>
                            <View style={styles.rightmid}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderV]}> 3</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.customerinfobottom}>
                    <View style={styles.thirdrow}>
                <View>
                <Pressable
                hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                android_ripple={{ color: '#13CB47', radius: 135 }}
                style={styles.lastbutton3}
                onPress={gotoTransactionHistory}
                >
                <View>
                    <Text style={[styles.text2, Globalstyle.CustomFontHeader]}>
                    Transaction History
                </Text>
                </View>
                <View style={styles.lasticon}>
                <FontAwesome5 name={'clock'} color={'#000000'} size={35} />
                </View>
                </Pressable>
                </View>
                </View>
                <View style={styles.thirdrow}>
                <View>
                <Pressable
                hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                android_ripple={{ color: '#13CB47', radius: 135 }}
                style={styles.lastbutton3}
                >
                <View>
                    <Text style={[styles.text2, Globalstyle.CustomFontHeader]}>
                    Loan Status: Active
                </Text>
                </View>
                <View style={styles.lasticon}>
                <FontAwesome5 name={'calendar'} color={'#000000'} size={35} />
                </View>
                </Pressable>
                </View>
                </View>
                <View style={styles.thirdrow}>
                <View>
                <Pressable
                hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                android_ripple={{ color: '#13CB47', radius: 135 }}
                style={styles.lastbutton3}
                >
                <View>
                    <Text style={[styles.text2, Globalstyle.CustomFontHeader]}>
                    Lien Details
                </Text>
                </View>
                <View style={styles.lasticon}>
                <FontAwesome5 name={'calculator'} color={'#000000'} size={35} />
                </View>
                </Pressable>
                </View>
                </View>
                <View
                style={styles.thirdrow}
                >
                <View>
                <Pressable
                hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                android_ripple={{ color: '#13CB47', radius: 135 }}
                style={styles.lastbutton3}
                onPress={gotoStatement}
                >
                <View>
                    <Text style={[styles.text2, Globalstyle.CustomFontHeader]}>
                    Send Statement
                </Text>
                </View>
                <View style={styles.lasticon}>
                <FontAwesome5 name={'scroll'} color={'#000000'} size={35} />
                </View>
                </Pressable>
                </View>
                </View>
                <View style={styles.thirdrow}>
                <View>
                <Pressable
                hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                android_ripple={{ color: '#13CB47', radius: 135 }}
                style={styles.lastbutton3}
                >
                <View>
                    <Text style={[styles.text2, Globalstyle.CustomFontHeader]}>
                    PND
                </Text>
                </View>
                <View style={styles.lasticon}>
                <FontAwesome5 name={'lock'} color={'#000000'} size={35} />
                </View>
                </Pressable>
                </View>
                </View>
                    </View>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
    },
    horizontal: {
        width: 420,
        height: 400,
        flex: 0.5,
        marginTop: -70,
        display: 'flex',
    },
    horizontal_body: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -100,
    },
    header: {
        color: '#23557F',
        marginTop: 30,
        marginBottom: -11,
    },
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF99',
        width: 411,
        marginTop: -15,
    },
    logo: {
        width: 100,
        height: 100,
        margin: 20,
        marginTop: 1,
        marginBottom: 10,
        objectFit: 'cover',
        borderRadius: 20,
    },
    bottoms: {
        marginTop: -50,
        marginRight: 65,
        display: 'flex',
        flexDirection: 'column',
    },
    scroll_image: {
        flex: 0.1,
        marginRight: 30,
        borderRadius: 20,
        marginLeft: 20,
        height: 100,
        marginTop: -50,
    },
    customerinfo: {
        flex: 3,
        width: 350,
        height: 285,
        marginRight: 10,
        marginTop: 160,
        marginLeft: 20,
        borderRadius: 10,
        backgroundColor: '#D9D9D990',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 5,
        elevation: 0.1,
        shadowOffset: { width: -0.5, height: 0},
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowOpacity: 1,
        shadowRadius: 1 ,
    },
    customerinfomid: {
        flex: 3,
        width: 390,
        height: 285,
        marginLeft: 5,
        marginTop: -10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#D9D9D999',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 5,
        elevation: 0.1,
        shadowOffset: { width: -0.5, height: 0},
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowOpacity: 1,
        shadowRadius: 1 ,
    },
    customerinfobottom: {
        flex: 3,
        width: 360,
        height: 285,
        marginLeft: 50,
        marginTop: 140,
        marginBottom: 10,
        borderRadius: 10,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        display: 'flex',
        flexDirection: 'column',
    },
    customertext: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        height: 60,
        marginLeft: 10,
    },
    customertextmid: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 35,
        height: 60,
        marginLeft: 10,
    },
    right: {
        flex: 1.5,
        marginTop: -45,
        marginRight: 5,
    },
    left: {
        flex: 2,
        marginTop: -45,
    },
    rightmid: {
        flex: 3,
        marginTop: -15,
        marginRight: 5,
        width: 380,
        height: 80,
    },
    leftmid: {
        flex: 2,
        marginTop: -10,
        height: 80,
    },
    thirdrow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80,
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        width: 125,
        height: 60,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#D9D9D999',
        marginLeft: 5,
        marginRight: 4,
    },
    text2: {
        color: '#000000',
        fontSize: 16,
        margin: -5,
        alignItems: 'center',
        fontFamily: 'NotoSans-Bold',
        marginLeft: 5,
        textAlign: 'auto',
    },

    lastbutton3: {
        display: 'flex',
        flexDirection: 'row',
        width: 345,
        height: 60,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -140,
        backgroundColor: '#D9D9D999',
        marginLeft: 1,
        marginRight: 32,
        marginBottom: 40,
        gap: 40,
    },
    lasticon: {
        marginRight: 30,
    },
    lastinputfield: {
        width: 385,
        height: 65,
        borderRadius: 45,
        // backgroundColor: '#D9D9D9',
        marginTop: 5,
        marginBottom: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bottom: {
        marginLeft: -160,
        marginBottom: 50,
    },
    top: {
        marginLeft: -160,
    },
});

export default CustomerInfo;