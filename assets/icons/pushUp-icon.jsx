import React from "react";
import { Svg, Path } from "react-native-svg";

const PushUp = (props) => {
    const color = props.strokeColor ? props.strokeColor : 'black'
    const fill = props.fill ? props.fill : 'black'
    const scale = props.scale ? props.scale : 1

    const def_width = 110
    const def_height = 62

    const width = props.width ? props.width: def_width
    const height = props.height ? props.height : def_height
    
    const x = width * scale
    const y = height * scale

    return(
        <Svg xmlns="http://www.w3.org/2000/svg" 
            width={x} 
            height={y} 
            viewBox={`0 0 ${def_width} ${def_height}`} 
            fill='none'
        >
            <Path d="M8.46942 51.538C9.38085 53.6984 11.4912 55.0941 13.846 55.0941C14.6213 55.0941 15.3779 54.9416 16.0949 54.639L47.9158 41.2201C48.2894 41.063 48.6375 40.8698 48.9587 40.6474C49.2462 40.6044 49.5303 40.5392 49.8026 40.4251L77.0221 28.9467L87.34 53.4121C87.8859 54.7088 89.1524 55.5469 90.5643 55.5469C91.0299 55.5469 91.4851 55.455 91.9146 55.2734L94.3265 54.256C95.1843 53.8952 95.8502 53.2189 96.2017 52.3528C96.5544 51.4868 96.5486 50.5381 96.1877 49.6814L83.9736 20.7182L83.9725 20.7171L81.6247 15.1496C81.0787 13.8528 79.8123 13.0147 78.4003 13.0147C77.9347 13.0147 77.4796 13.1067 77.0501 13.2883L44.2002 27.1401C42.7917 27.735 41.9909 29.1516 42.0887 30.5984L11.4121 43.5354C9.98381 44.1372 8.8745 45.2628 8.28667 46.7073C7.69884 48.1519 7.70815 49.7326 8.30995 51.1597L8.46942 51.538Z" fill={fill}/>
            <Path d="M97.4228 24.3616C99.0035 24.3616 100.549 24.0473 102.017 23.4292C104.931 22.2 107.191 19.9116 108.382 16.9817C109.573 14.0531 109.553 10.8357 108.324 7.92215C106.468 3.52448 102.186 0.683105 97.4111 0.683105C95.8304 0.683105 94.2846 0.996228 92.8167 1.61549C86.8022 4.15189 83.9737 11.1081 86.5101 17.1226C88.3655 21.5202 92.6491 24.3616 97.4228 24.3616Z" fill={fill}/>
            <Path d="M107.672 56.6609H2.32804C1.04296 56.6609 0 57.7038 0 58.9889C0 60.274 1.04296 61.317 2.32804 61.317H107.672C108.957 61.317 110 60.274 110 58.9889C110 57.7038 108.957 56.6609 107.672 56.6609Z" fill={fill}/>
        </Svg>
    )
}

export default PushUp