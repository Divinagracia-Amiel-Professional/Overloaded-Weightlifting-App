import React from "react";
import { Svg, Path, G, ClipPath, Defs, Rect } from "react-native-svg";

const Graph = (props) => {
    const color = props.strokeColor ? props.strokeColor : 'black'
    const fill = props.fill ? props.fill : 'none'
    const scale = props.scale ? props.scale : 1

    const def_width = 33
    const def_height = 33

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
            <Path d="M13.125 4.5V31.5H19.875V4.5C19.875 2.85 19.2 1.5 17.175 1.5H15.825C13.8 1.5 13.125 2.85 13.125 4.5Z" fill={fill} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M1.5 31.5H31.5" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M3 13.5V31.5H9V13.5C9 11.85 8.4 10.5 6.6 10.5H5.4C3.6 10.5 3 11.85 3 13.5Z" fill={fill} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M24 21V31.5H30V21C30 19.35 29.4 18 27.6 18H26.4C24.6 18 24 19.35 24 21Z" fill={fill} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>      
        </Svg>
    )
}

export default Graph