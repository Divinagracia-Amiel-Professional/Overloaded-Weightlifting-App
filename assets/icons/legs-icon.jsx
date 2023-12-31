import React from "react";
import { Svg, Path, G, ClipPath, Defs, Rect } from "react-native-svg";

const Legs = (props) => {
    const color = props.strokeColor ? props.strokeColor : 'white'
    const fill = props.fill ? props.fill : 'black'
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
            <Path d="M21.2117 0.609179C24.2392 1.64168 25.3242 7.69668 22.0375 9.19001C20.7158 9.79001 18.6633 10.4492 16.8833 10.05C14.6025 9.53918 12.9492 9.85168 12.9492 9.85168C12.9492 9.85168 16.9467 11.6767 18.2317 15.1208C19.5167 18.565 19.125 21.0967 20.9275 22.7567C22.3508 24.0675 23.2525 25.84 22.2933 26.9183C21.0058 28.3667 19.0192 26.895 17.21 28.985C15.9417 30.45 13.2017 29.97 11.3033 29.1033C8.90417 28.0083 11.9758 27.2775 12.8383 27.1892C13.7967 27.0917 17.2467 25.2325 15.6133 22.5692C12.1167 16.8683 8.52917 13.7825 6.18584 12.0608C4.09084 10.5225 3.87584 7.63335 6.06334 5.00668C7.44834 3.34335 10.4208 2.04501 13.7742 1.06251C16.1075 0.378346 18.7517 -0.229987 21.2117 0.609179Z" fill={fill}/>
            <Path d="M7.38917 10.8726L7.35417 10.8559C7.20194 10.7752 7.08799 10.6373 7.03736 10.4726C6.98673 10.3079 7.00357 10.1299 7.08417 9.97757C8.04584 8.16174 7.47751 6.64507 7.45334 6.58091C7.39126 6.4206 7.39496 6.24228 7.46361 6.08468C7.53227 5.92708 7.66034 5.80294 7.82001 5.73924C7.97926 5.67568 8.15723 5.67789 8.31486 5.74538C8.47249 5.81287 8.59692 5.94013 8.66084 6.09924C8.69501 6.18424 9.48834 8.21674 8.23334 10.5851C8.15582 10.7316 8.02525 10.843 7.86834 10.8964C7.71142 10.9499 7.54001 10.9413 7.38917 10.8726Z" fill={color}/>   
        </Svg>
    )
}

export default Legs