import React from "react";
import { Svg, Path, G, ClipPath, Defs, Rect } from "react-native-svg";

const Calendar = (props) => {
    const color = props.strokeColor ? props.strokeColor : 'black'
    const fill = props.fill ? props.fill : 'none'
    const scale = props.scale ? props.scale : 1

    const def_width = 30
    const def_height = 30

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
            <Path d="M10 2.5V6.25" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M20 2.5V6.25" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M4.375 11.3625H25.625" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M24.0125 19.7125L19.5875 24.1375C19.4125 24.3125 19.25 24.6375 19.2125 24.875L18.975 26.5625C18.8875 27.175 19.3125 27.6 19.925 27.5125L21.6125 27.275C21.85 27.2375 22.1875 27.075 22.35 26.9L26.775 22.475C27.5375 21.7125 27.9 20.825 26.775 19.7C25.6625 18.5875 24.775 18.95 24.0125 19.7125Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M23.375 20.35C23.75 21.7 24.8 22.75 26.15 23.125" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M15 27.5H10C5.625 27.5 3.75 25 3.75 21.25V10.625C3.75 6.875 5.625 4.375 10 4.375H20C24.375 4.375 26.25 6.875 26.25 10.625V15" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M14.9944 17.125H15.0056" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M10.3679 17.125H10.3791" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M10.3679 20.875H10.3791" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>      
        </Svg>
    )
}

export default Calendar