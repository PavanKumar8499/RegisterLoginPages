import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const HomeElevatedCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>Home Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevation]}>
                    <Text>Welocme </Text>
                </View>
                <View style={[styles.card, styles.cardElevation]}>
                    <Text>To </Text>
                </View>
                <View style={[styles.card, styles.cardElevation]}>
                    <Text>Home </Text>
                </View>
                <View style={[styles.card, styles.cardElevation]}>
                    <Text>Lets </Text>
                </View>
                <View style={[styles.card, styles.cardElevation]}>
                    <Text>Scroll </Text>
                </View>

            </ScrollView>
        </View>
    )
}

export default HomeElevatedCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24
        , fontWeight: 'bold'
        , paddingHorizontal: 8
        , color: 'blue'
        , alignItems: 'center'
        , margin: 8
    }
    , container: {
        padding: 8
    }
    , card: {
        flex: 1,
        width: 100,
        height: 100,
        alignItems: 'center'
        , justifyContent: 'center'
        , borderRadius: 8
        , margin: 8

    }
    , cardElevation: {
        backgroundColor: 'purple'
        , elevation: 4
        , shadowOffset: {
            width: 1,
            height: 1
        }
        , shadowColor: '#333'
        , shadowOpacity: 0.4
    }

})