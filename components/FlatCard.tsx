import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCard = () => {
    return (
        <View>
            <Text style={styles.headingTxt}>Flat Card</Text>
            <View style={styles.cardContainer}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.cardFour]}>
                    <Text>Yellow</Text>
                </View>

            </View>
        </View>
    )
}

export default FlatCard

const styles = StyleSheet.create({

    headingTxt: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 10,
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 8

    },

    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,

    },
    cardOne: {
        backgroundColor: '#EF5354'
    },
    cardTwo: {
        backgroundColor: '#50DBB4'
    },
    cardThree: {
        backgroundColor: '#5DA3FA'
    },
    cardFour: {
        backgroundColor: '#e6de49'
    },



})