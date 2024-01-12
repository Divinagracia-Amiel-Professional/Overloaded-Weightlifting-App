import { StyleSheet } from 'react-native'
import { colors, fontWeight, fontFamily, textSizes, shadow } from '../constants/theme'

const listStyles = StyleSheet.create({
    draggable: {
        listContainer: {
            paddingHorizontal: 15,
            // justifyContent: 'center',
            // alignItems: 'center',
            // alignSelf: 'stretch',
            
        },
        listItemContainerWithHamburger: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            alignSelf: 'stretch',
        },
        HamburgerContainer: {
            marginRight: 15,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'stretch',
            gap: 10,
        },
        ListItemContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'stretch',
            gap: 15,
            flexGrow: 1,
            
            borderTopWidth: 0.5,
            borderBottomWidth: 0.5,
            paddingVertical: 2.5
        },
        DetailContainer: {
            paddingVertical: 5,
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 0,
            alignSelf: 'stretch',
            flexGrow: 1,      
        },
        HeaderContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'stretch',
            justifyContent: 'space-between',
            gap: 20
        },
    },
    dropdown: {
        container: {
            margin: 0,
            width: 60,
            alignSelf: 'stretch',
            // borderBottomColor: 'gray',
            // borderBottomWidth: 0.5,
        },
        listContainer: {
            width: '150%'
        },
        itemContainer: {
            
        },
        // icon: {
        // marginRight: 5,
        // },
        placeholderStyle: {
            fontFamily: fontFamily.secondaryHeader,
            fontSize: textSizes.medium,
        },
        selectedTextStyle: {
            fontFamily: fontFamily.secondaryHeader,
            fontSize: textSizes.medium,
        },
    }
})

export default listStyles