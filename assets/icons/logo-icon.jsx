import React from "react";
import { Svg, Path, G, ClipPath, Defs, Rect } from "react-native-svg";

const Logo = (props) => {
    const color = props.strokeColor ? props.strokeColor : 'black'
    const fill = props.fill ? props.fill : 'none'
    const scale = props.scale ? props.scale : 1
    const strokeWidth = props.strokeWidth ? props.strokeWidth : 1.5

    const def_width = 92
    const def_height = 82

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
            <Path d="M2.6176 69.5829C-0.768334 61.1207 1.00243 50.4902 9.43708 44.4233C16.8117 39.1189 28.6633 41.5896 36.6836 50.0464C38.6373 47.6877 43.5625 43.324 47.6821 43.324C53.2256 43.324 59.8485 47.9603 62.6066 49.0034C60.1126 47.6739 58.8455 43.8187 57.2042 37.0134C55.1525 28.5067 55.1783 27.9427 52.8194 24.9047C51.783 25.6334 48.5086 26.8534 46.0855 26.2088C43.0566 25.403 41.2132 25.4329 38.6993 25.7791C36.3649 26.1006 33.4815 25.969 32.1006 23.5797C29.5229 19.1197 31.6831 19.0601 32.1116 18.3811C30.4778 18.1051 27.4349 16.1158 28.3341 10.3669C29.4581 3.1808 30.4189 3.27777 39.7354 1.91845C49.0519 0.559133 46.7853 0.463638 53.0129 3.32555C59.2406 6.18747 62.2643 8.97918 72.7094 22.013C81.2931 32.7242 84.6155 34.5595 87.4811 42.6484C89.507 48.3668 89.0408 52.0479 89.4783 53.5827C89.7122 54.4032 91.1902 57.7448 90.9795 58.849C90.3986 61.8934 90.3763 61.4112 87.335 63.3433C83.692 66.0553 83.401 66.6756 75.6206 72.6905C66.4399 79.7879 47.1812 83.6794 33.6644 78.875C29.5368 80.1107 9.25749 86.1776 2.6176 69.5829Z" fill={fill}/>
            <Path d="M66.4257 56.415C65.7184 62.4299 59.1697 65.2604 55.1088 65.2604C49.0967 65.2604 45.9573 64.1238 44.1456 61.0146M32.1116 18.3811C31.6831 19.0601 29.5229 19.1197 32.1006 23.5797C33.4815 25.969 36.3649 26.1006 38.6993 25.7791C41.2132 25.4329 43.0566 25.403 46.0855 26.2088C48.5086 26.8534 51.783 25.6334 52.8194 24.9047C55.1783 27.9427 55.1525 28.5067 57.2041 37.0134C58.8455 43.8187 60.1126 47.6739 62.6066 49.0034C59.8485 47.9603 53.2256 43.324 47.6821 43.324C43.5626 43.324 38.6373 47.6877 36.6836 50.0464M32.1116 18.3811C30.4778 18.1051 27.4349 16.1158 28.3341 10.3669C29.4581 3.1808 30.4189 3.27777 39.7354 1.91845C49.0519 0.559134 46.7853 0.463638 53.0129 3.32555C59.2406 6.18747 62.2643 8.97918 72.7094 22.013C81.2931 32.7242 84.6155 34.5595 87.4811 42.6484C89.507 48.3668 89.0408 52.0479 89.4783 53.5827C89.7122 54.4032 91.1902 57.7448 90.9795 58.849C90.3986 61.8934 90.3763 61.4112 87.335 63.3433C83.692 66.0553 83.401 66.6756 75.6206 72.6905C66.4399 79.7879 47.1812 83.6794 33.6644 78.875C29.5368 80.1107 9.25749 86.1776 2.6176 69.5829C-0.768334 61.1207 1.00243 50.4902 9.43708 44.4233C16.8117 39.1189 28.6633 41.5896 36.6836 50.0464M32.1116 18.3811C32.7193 19.9968 34.6912 23.0494 37.7173 22.3344M84.0592 52.9023C84.1041 51.0958 83.6738 46.4438 81.5932 42.2873M36.6836 50.0464C37.8364 51.262 38.9101 52.6013 39.8799 54.0589L36.6836 50.0464Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M51.9259 40.5183C50.2458 39.9102 49.3811 39.2119 46.0043 39.2119C43.4949 39.2119 38.97 42.0825 37.7798 43.4577" stroke={fill} strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M49.804 35.837C48.6279 35.4316 48.0226 34.9661 45.6589 34.9661C43.9023 34.9661 40.7348 36.8798 39.9017 37.7966" stroke={fill} strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M48.3894 32.0812C47.5493 31.7771 47.117 31.428 45.4286 31.428C44.1739 31.428 41.9114 32.8633 41.3163 33.5509" stroke={fill} strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>      
        </Svg>
    )
}

export default Logo