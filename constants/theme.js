const lightTheme = {
  "colors": {
    "primary": "rgb(175, 45, 54)",
    "onPrimary": "rgb(255, 255, 255)",
    "primaryContainer": "rgb(255, 218, 216)",
    "onPrimaryContainer": "rgb(65, 0, 7)",
    "secondary": "rgb(134, 70, 139)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(255, 214, 252)",
    "onSecondaryContainer": "rgb(54, 0, 62)",
    "tertiary": "rgb(176, 46, 0)",
    "onTertiary": "rgb(255, 255, 255)",
    "tertiaryContainer": "rgb(255, 219, 209)",
    "onTertiaryContainer": "rgb(59, 9, 0)",
    "error": "rgb(186, 26, 26)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 214)",
    "onErrorContainer": "rgb(65, 0, 2)",
    "background": "rgb(255, 251, 255)",
    "onBackground": "rgb(32, 26, 26)",
    "surface": "rgb(255, 251, 255)",
    "onSurface": "rgb(32, 26, 26)",
    "surfaceVariant": "rgb(244, 221, 220)",
    "onSurfaceVariant": "rgb(82, 67, 66)",
    "outline": "rgb(133, 115, 114)",
    "outlineVariant": "rgb(215, 193, 192)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(54, 47, 46)",
    "inverseOnSurface": "rgb(251, 238, 237)",
    "inversePrimary": "rgb(255, 179, 177)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(251, 241, 245)",
      "level2": "rgb(249, 235, 239)",
      "level3": "rgb(246, 228, 233)",
      "level4": "rgb(245, 226, 231)",
      "level5": "rgb(244, 222, 227)"
    },
    "surfaceDisabled": "rgba(32, 26, 26, 0.12)",
    "onSurfaceDisabled": "rgba(32, 26, 26, 0.38)",
    "backdrop": "rgba(59, 45, 45, 0.4)"
  }
}

const darkTheme = {
  "colors": {
    "primary": "rgb(255, 179, 177)",
    "onPrimary": "rgb(104, 0, 17)",
    "primaryContainer": "rgb(141, 18, 33)",
    "onPrimaryContainer": "rgb(255, 218, 216)",
    "secondary": "rgb(248, 172, 251)",
    "onSecondary": "rgb(81, 20, 89)",
    "secondaryContainer": "rgb(107, 45, 114)",
    "onSecondaryContainer": "rgb(255, 214, 252)",
    "tertiary": "rgb(255, 181, 160)",
    "onTertiary": "rgb(96, 21, 0)",
    "tertiaryContainer": "rgb(135, 33, 0)",
    "onTertiaryContainer": "rgb(255, 219, 209)",
    "error": "rgb(255, 180, 171)",
    "onError": "rgb(105, 0, 5)",
    "errorContainer": "rgb(147, 0, 10)",
    "onErrorContainer": "rgb(255, 180, 171)",
    "background": "rgb(32, 26, 26)",
    "onBackground": "rgb(237, 224, 223)",
    "surface": "rgb(32, 26, 26)",
    "onSurface": "rgb(237, 224, 223)",
    "surfaceVariant": "rgb(82, 67, 66)",
    "onSurfaceVariant": "rgb(215, 193, 192)",
    "outline": "rgb(160, 140, 139)",
    "outlineVariant": "rgb(82, 67, 66)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(237, 224, 223)",
    "inverseOnSurface": "rgb(54, 47, 46)",
    "inversePrimary": "rgb(175, 45, 54)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(43, 34, 34)",
      "level2": "rgb(50, 38, 38)",
      "level3": "rgb(57, 43, 43)",
      "level4": "rgb(59, 44, 44)",
      "level5": "rgb(63, 47, 47)"
    },
    "surfaceDisabled": "rgba(237, 224, 223, 0.12)",
    "onSurfaceDisabled": "rgba(237, 224, 223, 0.38)",
    "backdrop": "rgba(59, 45, 45, 0.4)"
  }
}

const colors = {
    primary: "#880D1E", //OU Crimson
    secondary: "#3D2B3D", //Dark Purple
  
    black: "#4F5152", //Cracked Pepper

    lightGray: "#F0EEEA", //Isabelline
    lightGray2: "#DAD7CD", //TimberWolf
  
    white: "#FFF",
  };
  
  const fontWeight = {
    light: 300,
    reg: 400,
    med: 500,
    semiBold: 600,
    bold: 700
  };

  const fontFamily = {
    primaryHeader: "Staatliches-Regular",
    secondaryHeader: "Anton-Regular",
    body: "Signika-Regular"
  }
  
  const textSizes = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
  };
  
  const shadow = {
    small: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
    },
    medium: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5.84,
      elevation: 5,
    },
  };
  
  export { colors, fontWeight, fontFamily, textSizes, shadow, lightTheme, darkTheme };