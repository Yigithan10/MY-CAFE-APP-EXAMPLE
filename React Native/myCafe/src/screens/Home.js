import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, BackHandler, Alert } from "react-native";
import { IconButton, Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Languages from '../../languages.json';

const Home = () => {
    const navigation = useNavigation();
    const { MyStore } = useSelector(state => state);

    let txtHeader = Languages.languages[MyStore.lang].Home.txtHeader;
    let txtEvents = Languages.languages[MyStore.lang].Home.txtEvents;
    let txtMenus = Languages.languages[MyStore.lang].Home.txtMenus;
    let txtDrinks = Languages.languages[MyStore.lang].Home.txtDrinks;
    let txtEats = Languages.languages[MyStore.lang].Home.txtEats;
    let txtAbout = Languages.languages[MyStore.lang].Home.txtAbout;
    let txtContact = Languages.languages[MyStore.lang].Home.txtContact;

    const ExitApp = () => {
        BackHandler.exitApp();
    };

    function handleExitButton() {
        ExitApp();
        return true;
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleExitButton);
        return () => {
            BackHandler.removeEventListener(
                'hardwareBackPress',
                handleExitButton,
            );
        };
    }, []);

    const IconButtonsSettings = () => {
        return (
            <IconButton
                onPress={() => navigation.navigate('Settings')}
                icon={<Icon as={Ionicons} name="settings-outline" />}
                color={'black'}
                size={35}
                _icon={{
                    color: 'black',
                    size: 'xl',
                }}
                _hover={{
                    bg: 'coolGray.800:alpha.20',
                }}
                _pressed={{
                    bg: 'coolGray.800:alpha.20',
                    _icon: {
                        name: 'settings',
                    },
                    _ios: {
                        _icon: {
                            size: 'xl',
                        },
                    },
                }}
                _ios={{
                    _icon: {
                        size: 'xl',
                    },
                }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                </View>
                <View style={styles.headerMiddle}>
                    <Text style={styles.text1}>
                        {txtHeader}
                    </Text>
                </View>
                <View style={styles.headerRight}>
                    {IconButtonsSettings()}
                </View>
            </View>
            <ImageBackground
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                source={require('../photos/home.jpg')}>
                <View style={styles.oneRow}>
                    <TouchableOpacity style={styles.oneCard} activeOpacity={0.6} onPress={() => {
                        navigation.navigate("Events");
                    }}>
                        <Image
                            style={styles.image}
                            source={require('../photos/events.jpg')}
                        />
                        <Text style={styles.text3}>{txtEvents}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.oneCard} activeOpacity={0.6} onPress={() => {
                        navigation.navigate("Menus");
                    }}>
                        <Image
                            style={styles.image}
                            source={require('../photos/menus.jpg')}
                        />
                        <Text style={styles.text3}>{txtMenus}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.oneRow}>
                    <TouchableOpacity style={styles.oneCard} activeOpacity={0.6} onPress={() => {
                        navigation.navigate("Drinks");
                    }}>
                        <Image
                            style={styles.image}
                            source={require('../photos/drinks.jpg')}
                        />
                        <Text style={styles.text3}>{txtDrinks}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.oneCard} activeOpacity={0.6} onPress={() => {
                        navigation.navigate("Eats");
                    }}>
                        <Image
                            style={styles.image}
                            source={require('../photos/eats.jpg')}
                        />
                        <Text style={styles.text3}>{txtEats}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.oneRow}>
                    <TouchableOpacity style={styles.oneCard} activeOpacity={0.6} onPress={() => {
                        navigation.navigate("About");
                    }}>
                        <Image
                            style={styles.image}
                            source={require('../photos/about.jpg')}
                        />
                        <Text style={styles.text3}>{txtAbout}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.oneCard} activeOpacity={0.6} onPress={() => {
                        navigation.navigate("Contact");
                    }}>
                        <Image
                            style={styles.image}
                            source={require('../photos/contact.jpg')}
                        />
                        <Text style={styles.text3}>{txtContact}</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
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
    oneRow: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    oneCard: {
        backgroundColor: '#FAD7A0',
        width: '45%',
        height: '85%',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10
    },
    image: {
        padding: 5,
        margin: 5,
        height: '75%',
        width: '100%',
        resizeMode: 'stretch',
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

export default Home;