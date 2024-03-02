import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
    return (
        <View>
            <Text style={styles.headingTxt}>ElevatedCard(Scroll-view)</Text>

            <ScrollView
                horizontal={true}
                style={styles.conatiner}>

                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>me</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Right👉</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Side</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>now</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>left</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>🙄</Text>
                </View>

            </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({



    headingTxt: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 10
    },
    conatiner: {
        padding: 8
    },

    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        margin: 8,
        width: 100,
        height: 100,


    },

    cardElevated: {
        backgroundColor: '#A77EFF',
        elevation: 10,
        shadowColor: 'yellow',


    },

})

export default ElevatedCard
