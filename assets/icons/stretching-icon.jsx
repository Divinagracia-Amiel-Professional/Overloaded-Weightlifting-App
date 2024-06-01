import React from "react";
import { Svg, Path, G, ClipPath, Defs, Rect } from "react-native-svg";

const Stretching = (props) => {
    const strokeWidth = props.strokeWidth ? props.strokeWidth : 0.799498
    const color = props.strokeColor ? props.strokeColor : 'black'
    const fill = props.fill ? props.fill : 'none'
    const scale = props.scale ? props.scale : 1

    const def_width = 38
    const def_height = 50

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
            <Path d="M34.2831 0.0114271C26.2672 0.71788 20.3521 4.71896 16.9039 10.5031C14.5929 13.4001 9.97675 22.2445 8.29791 26.8744C5.25386 32.6319 2.59941 39.4823 0.522082 45.6577C-0.747756 49.434 4.95398 51.8977 6.2311 48.1044C7.78465 43.4842 9.66152 38.4889 11.7825 33.8533C13.8873 38.564 16.0261 43.2595 18.3224 47.8805C20.1023 51.4677 25.4581 48.3218 23.6847 44.7467C21.3204 39.9899 19.1243 35.1571 16.9605 30.3081C16.9879 30.2143 17.0227 30.123 17.0518 30.03C17.4123 30.1327 17.81 30.1642 18.2481 30.0809C21.5589 29.4594 24.8697 28.8394 28.1829 28.2178C29.5982 27.9519 30.1406 26.4032 29.9175 25.1633C29.2482 21.4475 27.1313 18.8626 24.4962 16.4167C24.105 15.0862 22.8004 13.9093 21.3527 12.7397C24.2877 7.99499 29.0793 5.41975 35.3161 4.87011C38.4992 4.59125 37.4387 -0.265819 34.2831 0.0114271ZM22.2201 21.1315C23.0389 21.9834 23.7356 22.8798 24.2618 23.9177C22.6598 24.2184 21.0569 24.5182 19.4549 24.8189C20.2632 23.5176 21.1935 22.2889 22.2201 21.1315Z" fill={fill}/>
            <Path d="M29.0744 16.9016C31.4293 16.9016 33.3382 14.9927 33.3382 12.6379C33.3382 10.283 31.4293 8.37408 29.0744 8.37408C26.7196 8.37408 24.8107 10.283 24.8107 12.6379C24.8107 14.9927 26.7196 16.9016 29.0744 16.9016Z" fill={fill}/>
        </Svg>
    )
}

export default Stretching