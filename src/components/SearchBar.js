import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchScreen = ({ searchValue, setSearchValue, search}) => {
    return <View style={styles.seachBar} >
        <Feather name="search" style={styles.searchIcon} color="black" />
        <TextInput style={styles.searchInput} value={searchValue} onChangeText={(val) => setSearchValue(val)} onEndEditing={()=> search()} placeholder='Search....' /> 
        </View>;
};

const styles = StyleSheet.create({
    seachBar:{
        backgroundColor: '#ececec',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        paddingHorizontal: 2,
        flexDirection:'row'

    },
    searchInput:{
        flex: 1,
        marginHorizontal: 5,
        fontSize: 18
    },
    searchIcon:{
        fontSize: 35,
        alignSelf:'center'
    }
});

export default SearchScreen;