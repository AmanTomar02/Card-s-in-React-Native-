import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Contactlist = () => {

    const contact = [
        {
            uid: 1,
            name: 'Hitesh Choudhary',
            status: 'Just an extra ordinary teacher',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
            uid: 2,
            name: 'Anurag Tiwari',
            status: 'I ❤️ To Code and Teach!',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
            uid: 3,
            name: 'Sanket Singh',
            status: 'Making your GPay smooth',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
            uid: 4,
            name: 'Anirudh Jwala',
            status: 'Building secure Digital banks',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
    ]


    return (
        <View>
            <Text style={styles.headingTxt}>Contactlist</Text>
            <ScrollView
                style={styles.container}
                scrollEnabled={false}

            >
                {
                    contact.map(({ uid, name, status, imageUrl }) => (
                        <View key={uid} style={styles.userCard}>

                            <Image source={{
                                uri: imageUrl
                            }} style={styles.userImage} />
                            <View>
                                <Text style={styles.userName}>{name}</Text>
                                <Text style={styles.userStatus}>{status}</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default Contactlist

const styles = StyleSheet.create({
    headingTxt: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 10,

    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 10,
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#DAE0E2",
        marginHorizontal: 5,
        marginVertical: 5,
        paddingBottom: 3,
        paddingHorizontal: 3,
        borderRadius: 10,

    },
    userImage: {
        marginRight: 14,
        marginTop: 14,
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        marginBottom: 10,
    },
    userName: {
        fontWeight: '700',
        fontSize: 16,
        color: '#000000',
    },
    userStatus: {

        color: '#000000',
    },




})