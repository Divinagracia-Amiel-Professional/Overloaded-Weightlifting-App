import React from "react";
import { Svg, Path } from "react-native-svg";

const PullUp = (props) => {
    const color = props.strokeColor ? props.strokeColor : 'black'
    const fill = props.fill ? props.fill : 'black'
    const scale = props.scale ? props.scale : 1

    const def_width = 82
    const def_height = 96

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
            <Path d="M79.6 0.5H74.5C73.6 0.5 72.8 1.3 72.8 2.2V6.1H63.2C62.5 5 61.4 4.2 60 4.2C58.5 4.1 57.2 4.9 56.5 6.1H50.3C51.2 7.4 51.9001 8.9 52.2001 10.5H55.8001C55.6001 14.6 55.2001 18.9 54.9001 20.6C53.5001 21.6 48.3 22.9 43.8 22.9H37.8C33.3 22.9 28.1001 21.6 26.7001 20.6C26.4001 18.9 26 14.6 25.8 10.5H29.9001C30.2001 8.9 30.9 7.4 31.8 6.1H25C24.3 4.9 23 4.1 21.5 4.2C20.2 4.2 19 5 18.4 6.1H9.30005V2.2C9.30005 1.3 8.50005 0.5 7.60005 0.5H2.50005C1.60005 0.5 0.800049 1.3 0.800049 2.2V93.8C0.800049 94.7 1.60005 95.5 2.50005 95.5H7.60005C8.50005 95.5 9.30005 94.7 9.30005 93.8V10.5H17.9C18.1 14.4 18.5 20.8 19.3 23.3C20.6 27.5 26.7 29.3 31.5 30.1L32.2001 46.7L26.9001 75.1C26.4001 77.6 28.1 80 30.6 80.5C30.9 80.6 31.2001 80.6 31.4001 80.6C33.6001 80.6 35.5001 79.1 35.9001 76.8L40.9001 49.6L45.9001 76.8C46.4001 79.3 48.8 81 51.3 80.5C53.8 80 55.4 77.6 55 75.1L49.7001 46.7L50.4001 30C55.2001 29.2 60.9 27.4 62.2 23.2C62.9 20.7 63.4 14.3 63.6 10.4H72.7V93.7C72.7 94.6 73.5 95.4 74.4 95.4H79.5C80.4 95.4 81.2 94.6 81.2 93.7V2.2C81.3 1.3 80.5 0.5 79.6 0.5Z" fill={fill}/>  
            <Path d="M41 20.7C45.4183 20.7 49 17.1183 49 12.7C49 8.28172 45.4183 4.7 41 4.7C36.5818 4.7 33 8.28172 33 12.7C33 17.1183 36.5818 20.7 41 20.7Z" fill={fill}/>    
        </Svg>
    )
}

export default PullUp