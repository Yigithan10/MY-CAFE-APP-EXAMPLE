import React, { useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, ImageBackground, BackHandler } from 'react-native';
import Languages from '../../languages.json'
import { IconButton, Icon, Box, FlatList, Heading, Avatar, HStack, VStack, Spacer, Center } from "native-base";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Eats = () => {
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

    let txtEats = Languages.languages[MyStore.lang].Home.txtEats;
    let txtBreakfast = Languages.languages[MyStore.lang].Eats.txtBreakfast;
    let txtHamburger = Languages.languages[MyStore.lang].Eats.txtHamburger;
    let txtToast = Languages.languages[MyStore.lang].Eats.txtToast;
    let txtSandwich = Languages.languages[MyStore.lang].Eats.txtSandwich;
    let txtFriedPotatoes = Languages.languages[MyStore.lang].Eats.txtFriedPotatoes;
    let txtCookie = Languages.languages[MyStore.lang].Eats.txtCookie;
    let txtBiscuit = Languages.languages[MyStore.lang].Eats.txtBiscuit;
    let txtWafer = Languages.languages[MyStore.lang].Eats.txtWafer;
    let txtHearty = Languages.languages[MyStore.lang].Eats.txtHearty;
    let txtSnack = Languages.languages[MyStore.lang].Eats.txtSnack;
    let txtDessert = Languages.languages[MyStore.lang].Eats.txtDessert;

    const data = [{
        id: "1",
        name: txtBreakfast,
        explanation: txtHearty,
        url: require('../photos/breakfast.jpg')
    }, {
        id: "2",
        name: txtHamburger,
        explanation: txtHearty,
        url: require('../photos/hamburger.jpg')
    }, {
        id: "3",
        name: txtToast,
        explanation: txtHearty,
        url: require('../photos/toast.jpg')
    }, {
        id: "4",
        name: txtSandwich,
        explanation: txtSnack,
        url: require('../photos/sandwich.jpg')
    }, {
        id: "5",
        name: txtFriedPotatoes,
        explanation: txtSnack,
        url: require('../photos/friedPotatoes.jpg')
    },
    {
        id: "6",
        name: txtCookie,
        explanation: txtSnack,
        url: require('../photos/cookie.jpg')
    },
    {
        id: "7",
        name: txtBiscuit,
        explanation: txtDessert,
        url: require('../photos/biscuit.jpg')
    },
    {
        id: "8",
        name: txtWafer,
        explanation: txtDessert,
        url: require('../photos/wafer.jpg')
    }];

    const Foods = () => {
        return (
            <Box>
                <FlatList data={data} renderItem={({
                    item
                }) => <Box borderBottomWidth="1" _dark={{
                    borderColor: "muted.50"
                }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                        <HStack space={[2, 3]} justifyContent="space-between">
                            <VStack style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 5
                            }}>
                                <Avatar size={100} source={item.url} />
                            </VStack>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                flexDirection: 'column'
                            }}>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    margin: 5,
                                }}>
                                    <Text style={styles.text2}>
                                        {item.name}
                                    </Text>
                                </View>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    margin: 5,
                                }}>
                                    <Text style={[styles.text3]}>
                                        {item.explanation}
                                    </Text>
                                </View>
                            </View>
                            <Spacer />
                        </HStack>
                    </Box>} keyExtractor={item => item.id} />
            </Box>
        );
    }

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

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    {IconButtonsTurnBack()}
                </View>
                <View style={styles.headerMiddle}>
                    <Text style={styles.text1}>{txtEats}</Text>
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
                    <Foods />
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
        width: '95%',
        height: '95%',
        borderRadius: 20,
        margin: 10,
        padding: 20,
        flexDirection: 'column'
    },
    text1: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
    },
    text2: {
        color: 'black',
        fontWeight: 'bold',
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

export default Eats;