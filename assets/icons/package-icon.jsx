import React from "react";
import { Svg, Path } from "react-native-svg";

const Package = (props) => {
    const color = props.strokeColor ? props.strokeColor : 'black'
    const fill = props.fill ? props.fill : 'black'
    const scale = props.scale ? props.scale : 1

    const def_width = 98
    const def_height = 84

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
            <Path d="M49.0001 47.0692L25.5493 37.4729L13.8239 42.2711M49.0001 47.0692L49.0001 72.4035L25.5493 81.9998M49.0001 47.0692L37.2747 51.8674M2.09846 47.0692L25.5493 56.6655M2.09846 47.0692L2.09845 72.4035L25.5493 81.9998M2.09846 47.0692L13.8239 42.2711M25.5493 56.6655L25.5493 81.9998M25.5493 56.6655L37.2747 51.8674M37.2747 51.8674L13.8239 42.2711" stroke={color} strokeWidth="4" strokeLinejoin="round"/>
            <Path d="M95.9017 47.0692L72.4509 37.4729L60.7255 42.2711M95.9017 47.0692L95.9017 72.4035L72.4509 81.9998M95.9017 47.0692L84.1763 51.8674M49.0001 47.0692L72.4509 56.6655M49.0001 47.0692L49.0001 72.4035L72.4509 81.9998M49.0001 47.0692L60.7255 42.2711M72.4509 56.6655L72.4509 81.9998M72.4509 56.6655L84.1763 51.8674M84.1763 51.8674L60.7255 42.2711" stroke={color} strokeWidth="4" strokeLinejoin="round"/>
            <Path d="M72.4509 11.5963L49.0001 2L37.2747 6.79815M72.4509 11.5963L72.4509 36.9306L49.0001 46.5269M72.4509 11.5963L60.7255 16.3945M25.5493 11.5963L49.0001 21.1926M25.5493 11.5963L25.5493 36.9306L49.0001 46.5269M25.5493 11.5963L37.2747 6.79815M49.0001 21.1926L49.0001 46.5269M49.0001 21.1926L60.7255 16.3945M60.7255 16.3945L37.2747 6.79815" stroke={color} strokeWidth="4" strokeLinejoin="round"/>                       
        </Svg>
    )
}

export default Package