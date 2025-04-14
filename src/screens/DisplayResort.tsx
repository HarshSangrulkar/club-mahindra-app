import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'

const DisplayResort = ({ route, navigation }: any) => {
    const { width, height } = useWindowDimensions();
    const isPhone = width <= 768;

    const newHeight = isPhone ? 250 : 450;
    const newWidth = isPhone ? width * 0.5 : width * 0.6;
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
                        <Image source={{ uri: item }} style={[styles.image, { height: newHeight }]}
                            resizeMode='stretch' />
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