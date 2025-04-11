import * as React from "react";
import { Dimensions, Text, View, Image, StyleSheet, useWindowDimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
    ICarouselInstance,
    Pagination,
} from "react-native-reanimated-carousel";

const data = [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/6b/16/b9/caption.jpg',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/05/c1/fb/resort-rio.jpg',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/47/f5/9b/property-overview-2.jpg',
];
//const width = Dimensions.get("window").width;

function CarouselImages() {
    const { width, height } = useWindowDimensions();
    //const newHeight = height * 0.5;
    //const phoneHeight = 
    const isPhone = width <= 768;
    const newHeight = isPhone ? height * 0.3 : height * 0.7;
    const newWidth = width * 0.9;
    const ref = React.useRef<ICarouselInstance>(null);
    const progress = useSharedValue<number>(0);

    const onPressPagination = (index: number) => {
        ref.current?.scrollTo({
            /**
             * Calculate the difference between the current index and the target index
             * to ensure that the carousel scrolls to the nearest index
             */
            count: index - progress.value,
            animated: true,
        });
    };

    return (
        <View style={styles.container}>
            <Carousel
                ref={ref}
                width={width}
                height={newHeight}
                data={data}
                onProgressChange={progress}
                // renderItem={({ index }) => (
                //     <View
                //         style={{
                //             flex: 1,
                //             borderWidth: 1,
                //             justifyContent: "center",
                //         }}
                //     >
                //         <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
                //     </View>
                // )}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item }}
                        style={[styles.image, { width: width, height: newHeight }]}
                        resizeMode="cover"
                    />
                )}
            />
            <Text style={styles.text}>Hello Traveller</Text>
            <Text style={styles.subText}>Where would you like to go</Text>

            <Pagination.Basic
                progress={progress}
                data={data}
                dotStyle={{ backgroundColor: "rgba(0,0,0,0.8)", borderRadius: 50 }}
                containerStyle={{ gap: 5, marginTop: 10 }}
                onPress={onPressPagination}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    image: {
        //overflow: "hidden"
    },
    text: {
        position: "absolute",
        top: "10%",
        left: "2%",
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    subText: {
        position: "absolute",
        top: "15%",
        left: "2%",
        color: "white",
        fontWeight: "bold"
    }
})
export default CarouselImages;