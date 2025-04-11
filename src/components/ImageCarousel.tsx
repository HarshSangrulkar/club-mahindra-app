import React from 'react';
import { Dimensions, Image, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const images = [
    'https://img.freepik.com/free-vector/dark-hexagonal-background-with-gradient-color_79603-1409.jpg',
    'https://img.freepik.com/free-vector/realistic-neon-lights-background_23-2148907367.jpg',
    'https://img.freepik.com/free-photo/top-view-background-beautiful-white-grey-brown-cream-blue-background_140725-72219.jpg',
];

export default function ImageCarousel() {
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Carousel
                data={images}
                width={width}
                height={200}
                autoPlay={true}
                autoPlayInterval={2000}
                pagingEnabled={true}
                snapEnabled={true}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item }}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode="cover"
                    />
                )}
            />
        </View>
    );
}
