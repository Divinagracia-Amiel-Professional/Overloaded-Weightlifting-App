import React from "react";
import { Svg, Path, G, ClipPath, Defs, Rect } from "react-native-svg";

const GearHexa = (props) => {
    const color = props.strokeColor ? props.strokeColor : 'black'
    const fill = props.fill ? props.fill : 'none'
    const scale = props.scale ? props.scale : 1

    const def_width = 30
    const def_height = 32

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
            <Path fillRule="evenodd" clipRule="evenodd" d="M1.59985 11.7043V20.4556C1.59985 23.6709 1.59985 23.6709 4.63322 25.7184L12.975 30.5415C14.2338 31.2695 16.2813 31.2695 17.525 30.5415L25.8668 25.7184C28.9002 23.6709 28.9002 23.6709 28.9002 20.4707V11.7043C28.9002 8.50409 28.9002 8.50409 25.8668 6.45657L17.525 1.63352C16.2813 0.905507 14.2338 0.905507 12.975 1.63352L4.63322 6.45657C1.59985 8.50409 1.59985 8.50409 1.59985 11.7043ZM15.25 20.6375C17.7629 20.6375 19.8001 18.6004 19.8001 16.0875C19.8001 13.5746 17.7629 11.5374 15.25 11.5374C12.7371 11.5374 10.7 13.5746 10.7 16.0875C10.7 18.6004 12.7371 20.6375 15.25 20.6375Z" fill={fill} stroke={color} strokeWidth="1.82002" strokeLinecap="round" strokeLinejoin="round"/>      
        </Svg>
    )
}

export default GearHexa