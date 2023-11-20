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
            paddingRight: 15,
            alignItems: 'center',
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
        },
        DetailContainer: {
            paddingVertical: 5,
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 10,
            alignSelf: 'stretch',
            flexGrow: 1,      
        },
        HeaderContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'stretch',
            justifyContent: 'space-between'
        },
        RepContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
        },
    },
})

export default listStyles