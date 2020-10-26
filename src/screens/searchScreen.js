import React from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import DisplayIteams from '../components/displayIteams';
import useSearch from '../Hooks/useSeacrh';

const SearchScreen = () => {
    const [searchResult, searchValue, setSearchValue, searchAoi, FilterResult] = useSearch();
    let cost = FilterResult("$");
    let pricier = FilterResult("$$");
    let big = FilterResult("$$$");
    let spender = FilterResult("$$$$");
    
    return <>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} search={searchAoi} />
        <ScrollView showsVerticalScrollIndicator={false}>
            {cost.length > 0 ? <DisplayIteams title='Cost Effective' items={cost} />: null}
        
            {pricier.length > 0 ? <DisplayIteams title='Bit Pricier' items={pricier} /> : null}
        
            {big.length > 0 ? <DisplayIteams title='Big Spenders' items={big} /> : null}
        
            {spender.length > 0 ? <DisplayIteams title='Spenders' items={spender} /> : null }
        
        </ScrollView>
        </>
};

const styles = StyleSheet.create({
    layOut:{
        
    }
});

export default SearchScreen;