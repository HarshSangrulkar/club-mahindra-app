import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function SvgComponent(props: any) {
    return (
        <Svg
            //xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={22}
            viewBox="0 0 22 22"
            {...props}
        >
            <G data-name="Group 34644">
                <G data-name="Group 34643">
                    <G data-name="Group 33014">
                        <G data-name="Group 34639">
                            <G data-name="Group 34640">
                                <G
                                    data-name="Ellipse 4816"
                                    transform="translate(-2733 -6424) translate(105 -47) translate(0 213) translate(2628 6258)"
                                    fill="none"
                                    stroke="#1dade3"
                                    strokeWidth={1}
                                >
                                    <Circle cx={11} cy={11} r={11} stroke="none" />
                                    <Circle cx={11} cy={11} r={10.5} />
                                </G>
                            </G>
                        </G>
                        <Path
                            data-name="Path 33179"
                            d="M8 0a8 8 0 018 8 8.128 8.128 0 01-3.55 6.649A7.723 7.723 0 018 16 8 8 0 018 0z"
                            transform="translate(-2733 -6424) translate(105 -47) translate(0 213) translate(2631 6261)"
                            fill="#1dade3"
                        />
                    </G>
                </G>
            </G>
        </Svg>
    )
}

export default SvgComponent
