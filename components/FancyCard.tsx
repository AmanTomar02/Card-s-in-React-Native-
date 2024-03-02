import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
    return (
        <View>
            <Text style={styles.headingTxt}>FancyCard</Text>

            <View style={[styles.card, styles.cardElevated]}>

                <Image
                    source={require('../assets/sea.jpg')}
                    style={styles.cardImage} />

                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Sedny Ocean</Text>
                    <Text style={styles.cardLabel}>The world most visiting site </Text>
                    <Text style={styles.cardDescription}>ocean is a huge body of salt water. Oceans cover nearly 71 percent of Earth's surface. They contain almost 98 percent of all the water on Earth. There is one world ocean, but it is divided into five main areas: the Pacific, the Atlantic, the Indian, the Arctic, and the Southern, or Antarctic.</Text>
                    <Text style={styles.cardFooter}>12 min ago</Text>
                </View>

            </View>

        </View>
    )
}

export default FancyCard

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
        padding: 10
    },

    cardElevated: {
        backgroundColor: 'white',
        borderRadius: 6,

    },

    cardImage: {
        height: 250,
        width: "auto",
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },

    cardBody: {
        backgroundColor: 'pink',
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12

    },

    cardTitle: {
        color: "#000000"

    },

    cardLabel: {
        color: "#000000"
    },

    cardDescription: {
        color: "#000000"
    },

    cardFooter: {
        color: "#000000"
    },

})