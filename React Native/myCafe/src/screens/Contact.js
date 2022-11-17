import React, { useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, ImageBackground, BackHandler } from 'react-native';
import { IconButton, Icon } from "native-base";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Languages from '../../languages.json'

const Contact = () => {
    const navigation = useNavigation();

    function handleBackButton() {
        navigation.goBack()
        return true;
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        return () => {
            BackHandler.removeEventListener(
                'hardwareBackPress',
                handleBackButton,
            );
        };
    }, []);

    const { MyStore } = useSelector(state => state);

    let txtContact = Languages.languages[MyStore.lang].Home.txtContact;
    let txtSocial = Languages.languages[MyStore.lang].Contact.txtSocial;
    let txtPhoneNumber = Languages.languages[MyStore.lang].Contact.txtPhoneNumber;

    const IconButtonsTurnBack = () => {
        return (
            <IconButton
                onPress={() => navigation.goBack()}
                icon={<Icon as={Ionicons} name="arrow-back-circle-outline" />}
                color={'black'}
                size={35}
                _icon={{
                    color: 'black',
                    size: '2xl',
                }}
                _hover={{
                    bg: 'coolGray.800:alpha.20',
                }}
                _pressed={{
                    bg: 'coolGray.800:alpha.20',
                    _icon: {
                        name: 'arrow-back-circle',
                    },
                    _ios: {
                        _icon: {
                            size: '2xl',
                        },
                    },
                }}
                _ios={{
                    _icon: {
                        size: '2xl',
                    },
                }}
            />
        );
    };

    const IconButtonsInstagram = () => {
        return (
            <Icon as={FontAwesome} name="instagram" size={25} color={'black'} style={{ margin: 5 }} />
        );
    };

    const IconButtonsFacebook = () => {
        return (
            <Icon as={FontAwesome} name="facebook" size={25} color={'black'} style={{ margin: 5 }} />
        );
    };

    const IconButtonsMail = () => {
        return (
            <Icon as={Entypo} name="email" size={25} color={'black'} style={{ margin: 5 }} />
        );
    };

    const IconButtonsPhone = () => {
        return (
            <Icon as={FontAwesome} name="phone" size={25} color={'black'} style={{ margin: 5 }} />
        );
    };

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    {IconButtonsTurnBack()}
                </View>
                <View style={styles.headerMiddle}>
                    <Text style={styles.text1}>{txtContact}</Text>
                </View>
                <View style={styles.headerRight}>
                </View>
            </View>
            <ImageBackground
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                source={require('../photos/home.jpg')}>
                <View style={styles.CardContainer}>
                    <View style={[styles.Card, { height: '25%' }]}>
                        <Text style={[styles.text2, { fontWeight: 'bold' }]}>
                            {txtSocial}
                        </Text>
                    </View>
                    <View style={styles.Card}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            margin: 5
                        }}>
                            {IconButtonsInstagram()}
                            <Text style={styles.text3}>
                                Instagram
                            </Text>
                        </View>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            margin: 5
                        }}>
                            {IconButtonsFacebook()}
                            <Text style={styles.text3}>
                                Facebook
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.CardContainer}>
                    <View style={styles.Card}>
                        <View style={[styles.Card, { height: '50%' }]}>
                            <Text style={[styles.text2, { fontWeight: 'bold' }]}>
                                Gmail
                            </Text>
                        </View>
                        <View style={styles.Card}>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                margin: 5
                            }}>
                                {IconButtonsMail()}
                                <Text style={styles.text3}>
                                    Gmail
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.CardContainer}>
                    <View style={styles.Card}>
                        <View style={[styles.Card, { height: '50%' }]}>
                            <Text style={[styles.text2, { fontWeight: 'bold' }]}>
                                {txtPhoneNumber}
                            </Text>
                        </View>
                        <View style={styles.Card}>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                margin: 5
                            }}>
                                {IconButtonsPhone()}
                                <Text style={styles.text3}>
                                    +1 111 11 11
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    header: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 3,
        backgroundColor: 'darkgoldenrod'
    },
    headerLeft: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerMiddle: {
        width: '60%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerRight: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    CardContainer: {
        backgroundColor: '#FAD7A0',
        width: '90%',
        height: '30%',
        borderRadius: 20,
        margin: 10,
        flexDirection: 'column'
    },
    Card: {
        width: '100%',
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
    },
    text2: {
        color: 'black',
        fontSize: 18
    },
    text3: {
        color: 'black',
        fontSize: 15
    },
    text4: {
        color: 'black',
        fontWeight: 'italic',
        fontSize: 15
    },
    text5: {
        color: 'black',
        fontSize: 13
    },
    text6: {
        color: 'black',
        fontSize: 11
    },
})

export default Contact;