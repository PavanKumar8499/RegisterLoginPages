import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeElevatedCards from './HomeElevatedCards'

export default function Home() {
    return (
        <View style={myStyle.mainContainer}>
            <Text style={myStyle.headingText}>Home</Text>
            <View style={myStyle.container}>
                <View style={[myStyle.card, myStyle.cardOne]}>
                    <Text>Yellow</Text>
                </View>
                <View style={[myStyle.card, myStyle.cardTwo]}>
                    <Text>Red</Text>
                </View>
                <View style={[myStyle.card, myStyle.cardThree]}>
                    <Text>Red</Text>
                </View>
                <View style={[myStyle.card, myStyle.cardOne]}>
                    <Text>Green</Text>
                </View>
            </View>
            <HomeElevatedCards />
        </View>
    )
}

const myStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'lightblue',
        padding: 8,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: 'blue',
        alignItems: 'center',
        marginLeft: '40%'
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardOne: {
        backgroundColor: 'orange',
    },
    cardTwo: {
        backgroundColor: 'red',
    },
    cardThree: {
        backgroundColor: 'green',
    },

})