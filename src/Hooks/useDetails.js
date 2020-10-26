import  { useCallback, useState } from 'react';
import { apiDetails } from '../api/searcYelp'

export default () =>{
    const [detailResult, setDetailResult] = useState();
    const details = useCallback(async (id) => {
        let rawItems = await apiDetails(id);
        setDetailResult(rawItems.data);
    })
    
    return [detailResult, details];
}