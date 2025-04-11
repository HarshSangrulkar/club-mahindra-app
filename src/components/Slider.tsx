//import { window } from "@/constants/sizes";
//import { renderItem } from "@/utils/render-item";
import * as React from "react";
import { Dimensions, View, Image, StyleSheet } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";


const { width } = Dimensions.get('window');

const defaultDataWith6Colors = [
    'https://img.freepik.com/free-vector/dark-hexagonal-background-with-gradient-color_79603-1409.jpg',
    'https://img.freepik.com/free-vector/realistic-neon-lights-background_23-2148907367.jpg',
    'https://img.freepik.com/free-photo/top-view-background-beautiful-white-grey-brown-cream-blue-background_140725-72219.jpg',
];

function Index() {
    const progress = useSharedValue<number>(0);

    return (
        <View
            // id="carousel-component"
            // dataSet={{ kind: "basic-layouts", name: "parallax" }}
            style={styles.container}
        >
            <Carousel
                autoPlayInterval={2000}
                data={defaultDataWith6Colors}
                height={258}
                loop={true}
                pagingEnabled={true}
                snapEnabled={true}
                width={width}
                autoPlay={true}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}
                //onProgressChange={progress}
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start"
    }
})
export default Index;
