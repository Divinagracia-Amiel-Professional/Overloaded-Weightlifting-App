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
  
  export { colors, fontWeight, fontFamily, textSizes, shadow };