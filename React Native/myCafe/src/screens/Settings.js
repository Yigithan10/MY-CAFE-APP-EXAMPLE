import React, { useEffect, useState } from "react";
import Languages from '../../languages.json';
import { SafeAreaView, View, Text, StyleSheet, ImageBackground, BackHandler } from 'react-native';
import { IconButton, Icon, Select, Box, CheckIcon, Center } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SetLanguage } from "../redux/action";

const Settings = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

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

    const [language, setLanguage] = useState(MyStore.lang);
    const [languageName, setLanguageName] = useState('English');

    let txtSettings = Languages.languages[MyStore.lang].Settings.txtSettings;
    let txtLanguage = Languages.languages[MyStore.lang].Settings.txtLanguage;
    let txtSelectLanguage = Languages.languages[MyStore.lang].Settings.txtSelectLanguage;

    const storeData = async (lang) => {
        try {
            await AsyncStorage.setItem('language', lang);
        } catch (e) {
            console.log(e);
        }
    }

    const LanguageEng = () => {
        setLanguage('eng');
        setLanguageName('English');
        storeData('eng');
        dispatch(SetLanguage('eng'));
    };

    const LanguageDeu = () => {
        setLanguage('deu');
        setLanguageName('Deutsch');
        storeData('deu');
        dispatch(SetLanguage('deu'));
    };

    const LanguageFra = () => {
        setLanguage('fra');
        setLanguageName('Français');
        storeData('fra');
        dispatch(SetLanguage('fra'));
    };

    const LanguageTur = () => {
        setLanguage('tur');
        setLanguageName('Türkçe');
        storeData('tur');
        dispatch(SetLanguage('tur'));
    };

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

    const Flags = () => {
        if (MyStore.lang == "eng") {
            return (
                <ImageBackground
                    style={{
                        width: '75%',
                        height: '100%'
                    }}
                    source={require('../photos/abd.png')} >
                </ImageBackground>
            )
        } else if (MyStore.lang == "deu") {
            return (
                <ImageBackground
                    style={{
                        width: '75%',
                        height: '100%'
                    }}
                    source={require('../photos/germany.png')} >
                </ImageBackground>
            )
        } else if (MyStore.lang == "fra") {
            return (
                <ImageBackground
                    style={{
                        width: '75%',
                        height: '100%'
                    }}
                    source={require('../photos/france.png')} >
                </ImageBackground>
            )
        } else if (MyStore.lang == "tur") {
            return (
                <ImageBackground
                    style={{
                        width: '75%',
                        height: '100%'
                    }}
                    source={require('../photos/turkey.png')} >
                </ImageBackground>
            )
        }
    }

    const SelectLanguage = () => {
        return <Center>
            <Box maxW="90%">
                <Select bg={'black'} selectedValue={language} minWidth="100%" fontSize={21} accessibilityLabel={txtSelectLanguage} placeholder={txtSelectLanguage} _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />
                }} mt={1}>
                    <Select.Item label="English" value={LanguageEng} startIcon={<ImageBackground
                        style={{
                            width: '35%',
                            height: '100%'
                        }}
                        source={require('../photos/abd.png')} >
                    </ImageBackground>} />
                    <Select.Item label="Deutsch" value={LanguageDeu} startIcon={<ImageBackground
                        style={{
                            width: '35%',
                            height: '100%'
                        }}
                        source={require('../photos/germany.png')} >
                    </ImageBackground>} />
                    <Select.Item label="Français" value={LanguageFra} startIcon={<ImageBackground
                        style={{
                            width: '35%',
                            height: '100%'
                        }}
                        source={require('../photos/france.png')} >
                    </ImageBackground>} />
                    <Select.Item label="Türkçe" value={LanguageTur} startIcon={<ImageBackground
                        style={{
                            width: '35%',
                            height: '100%'
                        }}
                        source={require('../photos/turkey.png')} >
                    </ImageBackground>} />
                </Select>
            </Box>
        </Center>;
    };

    const MyLanguageText = () => {
        return (
            <SafeAreaView style={[styles.background, { justifyContent: 'center' }]}>
                <View style={[styles.languageCard, { flexDirection: 'row' }]}>
                    <View>
                        <Text style={styles.text3}>
                            {txtLanguage + " : "}
                        </Text>
                    </View>
                    <View style={{
                        width: '50%',
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            width: '30%',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}>
                            {Flags()}
                        </View>
                        <View style={{
                            width: '40%',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                        }}>
                            <Text style={styles.text3}>
                                {MyStore.lang.toUpperCase()}
                            </Text>
                        </View>
                    </View>
                </View>
                <View>
                    {SelectLanguage()}
                </View>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    {IconButtonsTurnBack()}
                </View>
                <View style={styles.headerMiddle}>
                    <Text style={styles.text1}>{txtSettings}</Text>
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
                <View style={styles.languageCardContainer}>
                    {MyLanguageText()}
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
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
    languageCardContainer: {
        backgroundColor: '#FAD7A0',
        width: '90%',
        height: '50%',
        borderRadius: 20
    },
    languageCard: {
        maxWidth: '100%',
        height: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
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

export default Settings;