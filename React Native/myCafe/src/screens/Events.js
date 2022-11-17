import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, ImageBackground, BackHandler } from 'react-native';
import Languages from '../../languages.json'
import { IconButton, Icon } from "native-base";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slideshow from 'react-native-image-slider-show';

const Events = () => {
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

    let txtEvents = Languages.languages[MyStore.lang].Home.txtEvents;
    let txtTitle1 = Languages.languages[MyStore.lang].Events.txtTitle1;
    let txtTitle2 = Languages.languages[MyStore.lang].Events.txtTitle2;
    let txtTitle3 = Languages.languages[MyStore.lang].Events.txtTitle3;
    let txtTitle4 = Languages.languages[MyStore.lang].Events.txtTitle4;
    let txtTitle5 = Languages.languages[MyStore.lang].Events.txtTitle5;
    let txtExplanation1 = Languages.languages[MyStore.lang].Events.txtExplanation1;
    let txtExplanation2 = Languages.languages[MyStore.lang].Events.txtExplanation2;
    let txtExplanation3 = Languages.languages[MyStore.lang].Events.txtExplanation3;
    let txtExplanation4 = Languages.languages[MyStore.lang].Events.txtExplanation4;
    let txtExplanation5 = Languages.languages[MyStore.lang].Events.txtExplanation5;

    const [data, setData] = useState(
        [
            {
                title: txtTitle1,
                url: require("../photos/events.jpg"),
            }, {
                title: txtTitle2,
                url: require("../photos/mik.jpg"),
            }, {
                title: txtTitle3,
                url: require("../photos/sinema.jpg"),
            }, {
                title: txtTitle4,
                url: require("../photos/birthday.jpg"),
            }, {
                title: txtTitle5,
                url: require("../photos/work.jpg"),
            },
        ]
    );

    const [position, setPosition] = useState(0);

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

    const MyText = () => {
        if (position == 0) {
            return (
                <Text style={styles.textExp}>
                    {txtExplanation1}
                </Text>
            )
        } else if (position == 1) {
            return (
                <Text style={styles.textExp}>
                    {txtExplanation2}
                </Text>
            )
        } else if (position == 2) {
            return (
                <Text style={styles.textExp}>
                    {txtExplanation3}
                </Text>
            )
        } else if (position == 3) {
            return (
                <Text style={styles.textExp}>
                    {txtExplanation4}
                </Text>
            )
        } else if (position == 4) {
            return (
                <Text style={styles.textExp}>
                    {txtExplanation5}
                </Text>
            )
        }
    }

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    {IconButtonsTurnBack()}
                </View>
                <View style={styles.headerMiddle}>
                    <Text style={styles.text1}>{txtEvents}</Text>
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
                source={require('../photos/home2.jpg')}>
                <View style={styles.CardContainerSlider}>
                    <Slideshow
                        dataSource={data}
                        position={position}
                        onPositionChanged={position => setPosition(position)}
                        indicatorSelectedColor={'orange'}
                        indicatorColor={'gray'}
                        scrollEnabled={false}
                        arrowSize={23}
                        indicatorSize={15}
                        titleStyle={styles.text2}
                        captionStyle={styles.text3}
                    />
                </View>
                <View style={styles.CardContainer}>
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {MyText()}
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
    CardContainerSlider: {
        width: '90%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    CardContainer: {
        backgroundColor: '#FAD7A0',
        width: '90%',
        height: '50%',
        borderRadius: 20,
        padding: 20,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
    },
    text2: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    text3: {
        color: 'white',
        fontSize: 15
    },
    textExp: {
        color: 'black',
        fontStyle: 'italic',
        fontSize: 25,
    }
})

export default Events;