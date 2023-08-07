/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */

import React from 'react';
import {

    StyleSheet,
    Image,
    Text,
    View,
    Alert,
    ScrollView,
} from 'react-native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Navbar from '../utils/Navbar';
import Globalstyle from '../utils/Globalstyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RefreshControl } from 'react-native';




type RootStackParamList = {
    TransactionHistory: undefined
};

type TransactionHistoryNavigationProp = StackNavigationProp<RootStackParamList, 'TransactionHistory'>

type TransactionHistoryProps = {
    navigation: TransactionHistoryNavigationProp;
    route: RouteProp<RootStackParamList, 'TransactionHistory'>;
};

interface MyArrayElements {
    // key: number
    title: string
    data: string[]
    // amount: string
    // status: boolean
    // message: string
  }


function TransactionHistory({ navigation, route }: TransactionHistoryProps): JSX.Element{


    // useEffect(() => {
    //     //Call your function inside here
    // }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Navbar />
        <View style={styles.body}>
                <View style={styles.body}>
        <Text style={[styles.header, Globalstyle.CustomFontHeader]}> Transaction History</Text>
            <View style={styles.transaction_card}>
                <View style={styles.card_content}>
                    <View style={styles.left}>
                        <View style={styles.set}>
                        <FontAwesome5 name={'mobile'} color={'#23557F'} size={31} />
                        </View>
                    </View>
                    <View style={styles.mid}><Text>Second</Text>
                    <View style={styles.mid_top}>
                        <Text style={[styles.text_top, Globalstyle.CustomFontTT]}>Transferred to other local bank</Text>
                    </View>
                    <View style={styles.mid_bottom}>
                    <Text style={[styles.text_top, Globalstyle.CustomFontTB]}>You have transferred NGN 3,400 to olahammed via Ecobank Nigeria</Text>
                    </View>
                    </View>
                    <View style={styles.right}>
                        <Text>Third</Text>
                        <View style={styles.right_top}><Text style={[styles.righttexttop, Globalstyle.CustomFontTT]}>NGN 3400</Text></View>
                        <View style={styles.right_bottom}><Text style={[styles.righttextbottom, Globalstyle.CustomFontTBG]}>SUCCESS</Text></View>
                        </View>
                </View>
                <View style={styles.card_content}>
                    <View style={styles.left}>
                        <View style={styles.set}>
                        <FontAwesome5 name={'mobile'} color={'#23557F'} size={31} />
                        </View>
                    </View>
                    <View style={styles.mid}><Text>Second</Text>
                    <View style={styles.mid_top}>
                        <Text style={[styles.text_top, Globalstyle.CustomFontTT]}>Transferred to other local bank</Text>
                    </View>
                    <View style={styles.mid_bottom}>
                    <Text style={[styles.text_top, Globalstyle.CustomFontTB]}>You have transferred NGN 3,400 to olahammed via Ecobank Nigeria</Text>
                    </View>
                    </View>
                    <View style={styles.right}>
                        <Text>Third</Text>
                        <View style={styles.right_top}><Text style={[styles.righttexttop, Globalstyle.CustomFontTT]}>NGN 3400</Text></View>
                        <View style={styles.right_bottom}><Text style={[styles.righttextbottom, Globalstyle.CustomFontTBG]}>SUCCESS</Text></View>
                        </View>
                </View>
                <View style={styles.card_content}>
                    <View style={styles.left}>
                        <View style={styles.set}>
                        <FontAwesome5 name={'mobile'} color={'#23557F'} size={31} />
                        </View>
                    </View>
                    <View style={styles.mid}><Text>Second</Text>
                    <View style={styles.mid_top}>
                        <Text style={[styles.text_top, Globalstyle.CustomFontTT]}>Transferred to other local bank</Text>
                    </View>
                    <View style={styles.mid_bottom}>
                    <Text style={[styles.text_top, Globalstyle.CustomFontTB]}>You have transferred NGN 3,400 to olahammed via Ecobank Nigeria</Text>
                    </View>
                    </View>
                    <View style={styles.right}>
                        <Text>Third</Text>
                        <View style={styles.right_top}><Text style={[styles.righttexttop, Globalstyle.CustomFontTT]}>NGN 3400</Text></View>
                        <View style={styles.right_bottom}><Text style={[styles.righttextbottom, Globalstyle.CustomFontTBG]}>SUCCESS</Text></View>
                        </View>
                </View>
                <View style={styles.card_content}>
                    <View style={styles.left}>
                        <View style={styles.set}>
                        <FontAwesome5 name={'mobile'} color={'#23557F'} size={31} />
                        </View>
                    </View>
                    <View style={styles.mid}><Text>Second</Text>
                    <View style={styles.mid_top}>
                        <Text style={[styles.text_top, Globalstyle.CustomFontTT]}>Transferred to other local bank</Text>
                    </View>
                    <View style={styles.mid_bottom}>
                    <Text style={[styles.text_top, Globalstyle.CustomFontTB]}>You have transferred NGN 3,400 to olahammed via Ecobank Nigeria</Text>
                    </View>
                    </View>
                    <View style={styles.right}>
                        <Text>Third</Text>
                        <View style={styles.right_top}><Text style={[styles.righttexttop, Globalstyle.CustomFontTT]}>NGN 3400</Text></View>
                        <View style={styles.right_bottom}><Text style={[styles.righttextbottom, Globalstyle.CustomFontTBG]}>SUCCESS</Text></View>
                        </View>
                </View>
                <View style={styles.card_content}>
                    <View style={styles.left}>
                        <View style={styles.set}>
                        <FontAwesome5 name={'mobile'} color={'#23557F'} size={31} />
                        </View>
                    </View>
                    <View style={styles.mid}><Text>Second</Text>
                    <View style={styles.mid_top}>
                        <Text style={[styles.text_top, Globalstyle.CustomFontTT]}>Transferred to other local bank</Text>
                    </View>
                    <View style={styles.mid_bottom}>
                    <Text style={[styles.text_top, Globalstyle.CustomFontTB]}>You have transferred NGN 3,400 to olahammed via Ecobank Nigeria</Text>
                    </View>
                    </View>
                    <View style={styles.right}>
                        <Text>Third</Text>
                        <View style={styles.right_top}><Text style={[styles.righttexttop, Globalstyle.CustomFontTT]}>NGN 3400</Text></View>
                        <View style={styles.right_bottom}><Text style={[styles.righttextbottom, Globalstyle.CustomFontTBG]}>SUCCESS</Text></View>
                        </View>
                </View>
                <View style={styles.card_content}>
                    <View style={styles.left}>
                        <View style={styles.set}>
                        <FontAwesome5 name={'mobile'} color={'#23557F'} size={31} />
                        </View>
                    </View>
                    <View style={styles.mid}><Text>Second</Text>
                    <View style={styles.mid_top}>
                        <Text style={[styles.text_top, Globalstyle.CustomFontTT]}>Transferred to other local bank</Text>
                    </View>
                    <View style={styles.mid_bottom}>
                    <Text style={[styles.text_top, Globalstyle.CustomFontTB]}>You have transferred NGN 3,400 to olahammed via Ecobank Nigeria</Text>
                    </View>
                    </View>
                    <View style={styles.right}>
                        <Text>Third</Text>
                        <View style={styles.right_top}><Text style={[styles.righttexttop, Globalstyle.CustomFontTT]}>NGN 3400</Text></View>
                        <View style={styles.right_bottom}><Text style={[styles.righttextbottom, Globalstyle.CustomFontTBG]}>SUCCESS</Text></View>
                        </View>
                </View>
                <View style={styles.card_content}>
                    <View style={styles.left}>
                        <View style={styles.set}>
                        <FontAwesome5 name={'mobile'} color={'#23557F'} size={31} />
                        </View>
                    </View>
                    <View style={styles.mid}><Text>Second</Text>
                    <View style={styles.mid_top}>
                        <Text style={[styles.text_top, Globalstyle.CustomFontTT]}>Transferred to other local bank</Text>
                    </View>
                    <View style={styles.mid_bottom}>
                    <Text style={[styles.text_top, Globalstyle.CustomFontTB]}>You have transferred NGN 3,400 to olahammed via Ecobank Nigeria</Text>
                    </View>
                    </View>
                    <View style={styles.right}>
                        <Text>Third</Text>
                        <View style={styles.right_top}><Text style={[styles.righttexttop, Globalstyle.CustomFontTT]}>NGN 3400</Text></View>
                        <View style={styles.right_bottom}><Text style={[styles.righttextbottom, Globalstyle.CustomFontTBG]}>SUCCESS</Text></View>
                        </View>
                </View>
                <View style={styles.card_content}>
                    <View style={styles.left}>
                        <View style={styles.set}>
                        <FontAwesome5 name={'mobile'} color={'#23557F'} size={31} />
                        </View>
                    </View>
                    <View style={styles.mid}><Text>Second</Text>
                    <View style={styles.mid_top}>
                        <Text style={[styles.text_top, Globalstyle.CustomFontTT]}>Transferred to other local bank</Text>
                    </View>
                    <View style={styles.mid_bottom}>
                    <Text style={[styles.text_top, Globalstyle.CustomFontTB]}>You have transferred NGN 3,400 to olahammed via Ecobank Nigeria</Text>
                    </View>
                    </View>
                    <View style={styles.right}>
                        <Text>Third</Text>
                        <View style={styles.right_top}><Text style={[styles.righttexttop, Globalstyle.CustomFontTT]}>NGN 3400</Text></View>
                        <View style={styles.right_bottom}><Text style={[styles.righttextbottom, Globalstyle.CustomFontTBG]}>SUCCESS</Text></View>
                        </View>
                </View>
                <View style={styles.card_content}>
                    <View style={styles.left}>
                        <View style={styles.set}>
                        <FontAwesome5 name={'mobile'} color={'#23557F'} size={31} />
                        </View>
                    </View>
                    <View style={styles.mid}><Text>Second</Text>
                    <View style={styles.mid_top}>
                        <Text style={[styles.text_top, Globalstyle.CustomFontTT]}>Transferred to other local bank</Text>
                    </View>
                    <View style={styles.mid_bottom}>
                    <Text style={[styles.text_top, Globalstyle.CustomFontTB]}>You have transferred NGN 3,400 to olahammed via Ecobank Nigeria</Text>
                    </View>
                    </View>
                    <View style={styles.right}>
                        <Text>Third</Text>
                        <View style={styles.right_top}><Text style={[styles.righttexttop, Globalstyle.CustomFontTT]}>NGN 3400</Text></View>
                        <View style={styles.right_bottom}><Text style={[styles.righttextbottom, Globalstyle.CustomFontTBG]}>SUCCESS</Text></View>
                        </View>
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
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    text: {
        color: '#23557F',
        marginTop: 10,
        fontSize: 20,
        marginBottom: 20,
    },
    header: {
        color: '#23557F',
        marginTop: 10,
        fontSize: 20,
        marginBottom: 20,
    },
    text_top: {
        color: '#23557F',
        marginTop: -25,
        fontSize: 12,
        marginBottom: 20,
    },
    transaction_card: {
        width: 385,
        height: 800,
        display: 'flex',
        flexDirection: 'column',
        padding: 5,
    },
    card_content: {
        width: 370,
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 1,
        marginTop: 3,
    },
    left: {
        flex: 0.5,
        width: 65,
        height: 65,
        borderRadius: 10,
        padding: 1,
        marginRight: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // borderColor: '#D9D9D9',
        elevation: 8,
        shadowOffset: { width: -3, height: 2 },
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 20,
    },
    mid: {
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
    },
    mid_top: {
        marginTop: 1,
    },
    mid_bottom: {

    },
    right: {
        flex: 0.8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    right_top: {
        marginBottom: 3,
        padding: 2,
    },
    right_bottom: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 5,
        marginRight: 0.3,
    },
    set: {
        marginTop: 20,
        marginRight: 3,
        height: 50,
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },
    righttexttop: {
        color: '#000000',
        marginTop: -20,
        fontSize: 12,
        marginBottom: 25,
        marginLeft: 10,
    },
    righttextbottom: {
        color: '#13CB47',
        marginTop: -25,
        fontSize: 12,
        marginBottom: 20,
        marginLeft: 12,
    },
    scrollViewContent: {
        flexGrow: 1,
        alignItems: 'center', // Center content horizontally
        justifyContent: 'center', // Center content vertically
    },
});

export default TransactionHistory;