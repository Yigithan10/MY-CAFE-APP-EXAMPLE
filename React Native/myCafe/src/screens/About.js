import React, { useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, ImageBackground, BackHandler } from 'react-native';
import Languages from '../../languages.json'
import { IconButton, Icon } from "native-base";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const About = () => {
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

    let txtAbout = Languages.languages[MyStore.lang].Home.txtAbout;
    let txtWhoAreWe = Languages.languages[MyStore.lang].About.txtWhoAreWe;

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
                    <Text style={styles.text1}>{txtAbout}</Text>
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
                    <Text style={styles.text2}>
                        {txtWhoAreWe}
                    </Text>
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
        height: '50%',
        borderRadius: 20,
        margin: 10,
        padding: 20,
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

export default About;