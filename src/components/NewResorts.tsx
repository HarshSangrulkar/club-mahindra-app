import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, useWindowDimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const resorts = [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/6b/16/b9/caption.jpg',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/05/c1/fb/resort-rio.jpg',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/47/f5/9b/property-overview-2.jpg',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/6b/16/b9/caption.jpg',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/05/c1/fb/resort-rio.jpg',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/47/f5/9b/property-overview-2.jpg'
];

//const width = Dimensions.get('window').width;

//{ navigation }: any
const NewResorts = ({ navigation }: any) => {
    const { width, height } = useWindowDimensions();
    const isPhone = width <= 768;

    const newHeight = isPhone ? 250 : 350;
    const newWidth = isPhone ? width * 0.5 : width * 0.6;

    // const goToResort = (image: string) => {
    //     navigation.navigate("DisplayResort", { image })
    // }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>New Resorts</Text>
            <Text style={styles.subText}>
                Unwind at Club Mahindra’s best resorts with premium stays and amazing experiences.
            </Text>

            <FlatList
                data={resorts}
                horizontal
                showsHorizontalScrollIndicator={false}
                //style={styles.imageList}
                contentContainerStyle={styles.imageList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={[styles.card, { width: newWidth }]} >
                        <Image source={{ uri: item }} style={[styles.image, { height: newHeight }]} />
                        <Text style={styles.imageText}>Resort {index + 1}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 16,
        //paddingTop: 30,
        flex: 1,
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    subText: {
        color: 'black',
        marginBottom: 12,
    },
    imageList: {
        //paddingRight: 16,
        justifyContent: "space-between",
    },
    card: {
        margin: 8,
        borderRadius: 12,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        //height: 160,
        borderRadius: 12,
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
});

export default NewResorts;
