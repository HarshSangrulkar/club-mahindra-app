import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'

const ImageListDisplay = () => {
    return (
        <View>
            <Text style={styles.text}>Top Rated Resorts</Text>
            <Text style={styles.subText}>
                Unwind at Club Mahindra’s best resorts with premium stays and amazing experiences.
            </Text>
        </View>
    )
}

export default ImageListDisplay

const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    subText: {
        color: 'black',
        marginBottom: 12,
    },
})