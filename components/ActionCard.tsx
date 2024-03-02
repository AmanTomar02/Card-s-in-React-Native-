import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {


    function openWebsite(WebsiteLink: string) {
        Linking.openURL(WebsiteLink)
    }

    return (
        <View>
            <Text style={styles.headingTxt}>Blog Card</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headrText}>
                        Dog
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://picsum.photos/id/237/536/354',
                    }}
                    style={styles.cardImage}
                />
                <View
                    style={styles.bodyConatainer}>
                    <Text
                        numberOfLines={3}
                        style={styles.bodyConatainerTxt}>
                        Advanced Usage
                        You may combine any of the options above.
                        For example, to get a specific image that is grayscale and blurred.</Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => { openWebsite('https://picsum.photos/') }}
                    >
                        <Text
                            style={styles.btn}
                        >Read More</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { openWebsite('https://www.instagram.com/') }}

                    >

                        <Text style={styles.btn}>Follow me on instagram</Text>

                    </TouchableOpacity>
                </View>



            </View>
        </View>
    )
}

export default ActionCard

const styles = StyleSheet.create({

    headingTxt: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 10,

    },
    card: {
        width: 395,
        height: 440,
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10,

    },

    cardElevated: {
        height: 550,
        backgroundColor: '#F0DF87',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: 'yellow'
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    headrText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },

    cardImage: {
        height: 400,
    },

    bodyConatainer: {
        padding: 10
    },

    bodyConatainerTxt: {
        color: 'black',
    },

    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    btn: {
        fontSize: 16,
        backgroundColor: "#3498DB",
        paddingHorizontal: 4,
        paddingVertical: 2,
        elevation: 10,
        borderRadius: 4,


    },

})