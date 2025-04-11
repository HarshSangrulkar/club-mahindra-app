import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const DisplayResort = ({ route, navigation }: any) => {
    const { image } = route.params;

    const goToCLub = () => {
        navigation.navigate("Club");
    }
    return (
        <View>
            <Text>Resort</Text>
            <FlatList
                data={[image]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View >
                        <Image source={{ uri: item }} style={[styles.image, { height: 300 }]}
                            resizeMode='cover' />
                        <Text style={styles.imageText}>Resort </Text>
                    </View>
                )}
            />
            <TouchableOpacity onPress={goToCLub}><Text>Join the Club</Text></TouchableOpacity>
        </View>
    )
}

export default DisplayResort

const styles = StyleSheet.create({
    image: {
        width: '100%',
        //height: 160,
        //borderRadius: 12,
    },
    imageText: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'rgba(0,0,0,0.4)',
        paddingHorizontal: 6,
        borderRadius: 4,
    },
})