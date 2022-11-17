import React, { useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, ImageBackground, BackHandler } from 'react-native';
import Languages from '../../languages.json'
import { IconButton, Icon, Box, FlatList, Heading, Avatar, HStack, VStack, Spacer, Center } from "native-base";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Menus = () => {
    const navigation = useNavigation();

    const { MyStore } = useSelector(state => state);

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

    let txtMenus = Languages.languages[MyStore.lang].Home.txtMenus;
    let txtMenu1 = Languages.languages[MyStore.lang].Menus.txtMenu1;
    let txtExplanation1 = Languages.languages[MyStore.lang].Menus.txtExplanation1;
    let txtMenu2 = Languages.languages[MyStore.lang].Menus.txtMenu2;
    let txtExplanation2 = Languages.languages[MyStore.lang].Menus.txtExplanation2;
    let txtMenu3 = Languages.languages[MyStore.lang].Menus.txtMenu3;
    let txtExplanation3 = Languages.languages[MyStore.lang].Menus.txtExplanation3;

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

    const data = [{
        id: "1",
        name: txtMenu1,
        explanation: txtExplanation1,
        url1: require('../photos/tea.jpg'),
        url2: require('../photos/breakfast.jpg')
    }, {
        id: "2",
        name: txtMenu2,
        explanation: txtExplanation2,
        url1: require('../photos/cola.jpg'),
        url2: require('../photos/hamburger.jpg')
    }, {
        id: "3",
        name: txtMenu3,
        explanation: txtExplanation3,
        url1: require('../photos/redbull.jpg'),
        url2: require('../photos/friedPotatoes.jpg')
    }];

    const Menus = () => {
        return (
            <Box>
                <FlatList data={data} renderItem={({
                    item
                }) => <Box borderBottomWidth="1" _dark={{
                    borderColor: "muted.50"
                }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                        <HStack space={[2, 3]} justifyContent="space-between" flexDirection={'column'}>
                            <VStack style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                margin: 5
                            }}>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: 5
                                }}>
                                    <Avatar size={100} source={item.url1} />
                                </View>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: 5
                                }}>
                                    <Text style={styles.text2}>+</Text>
                                </View>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: 5
                                }}>
                                    <Avatar size={100} source={item.url2} />
                                </View>
                            </VStack>
                            <VStack style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column'
                            }}>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: 5,
                                }}>
                                    <Text style={styles.text2}>
                                        {item.name}
                                    </Text>
                                </View>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: 5,
                                }}>
                                    <Text style={[styles.text3]}>
                                        {item.explanation}
                                    </Text>
                                </View>
                            </VStack>
                            <Spacer />
                        </HStack>
                    </Box>} keyExtractor={item => item.id} />
            </Box>
        );
    }


    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    {IconButtonsTurnBack()}
                </View>
                <View style={styles.headerMiddle}>
                    <Text style={styles.text1}>{txtMenus}</Text>
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
                    <Menus />
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
        height: '65%',
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

export default Menus;