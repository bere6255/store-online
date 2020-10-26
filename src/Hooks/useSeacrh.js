import  { useEffect, useCallback, useState } from 'react';
import { apiSearch } from '../api/searcYelp'

export default () =>{
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const searchAoi = useCallback(async () => {
        let rawItems = await apiSearch({
            params: {
                term: searchValue,
                location: 'New York',
                limit: 50
            }
        });
        setSearchResult(rawItems.data.businesses);
    })
    useEffect(() => {
        searchAoi('bar');
    }, [])
    const FilterResult = (price) => searchResult.filter(results => results.price === price);
    return [searchResult, searchValue, setSearchValue, searchAoi, FilterResult];
}