import React, { useState, useRef, useEffect } from 'react';
import { Text, View, Pressable, ScrollView, FlatList } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
    mainStyles,
    textStyles,
    buttonStyles
} from '../../styles/style-index'
import { 
    BackButton, 
} from '../../components/component-index';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import SelectRecordsListItem from '../../components/tracker/SelectRecordItem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';

export default function SelectRecordsListPage({navigation, route}){
    const theme = useTheme()
    const userRecordsDB = useSelector((state: RootState) => state.currentUser.records)
    const userRecords = [...userRecordsDB]
    const sortedByName = userRecords.sort((a, b) => {
        return a.name.localeCompare(b.name)
    })

    const RenderItem = ({ item }) => {
        console.log(item)

        return(
            <SelectRecordsListItem
                key={item.id}
                item={item}
                navigation={navigation}
            />
        ) 
    }

    return(
        <SafeAreaView
            style={{flex: 1, position: 'relative'}}
        >
            <BackButton navigation={navigation} type='default' hidden={false} params={{}}/>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    paddingVertical: 20,
                }}
            >
                <Text
                    style={{
                        ...textStyles.headerText,
                        color: theme.colors.secondary,
                        fontSize: 28
                    }}
                >Exercise List</Text>
            </View>
            <FlashList
                data={sortedByName}
                renderItem={RenderItem}
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                estimatedItemSize={100}
                scrollEnabled={true}
            />
        </SafeAreaView>
    )
}