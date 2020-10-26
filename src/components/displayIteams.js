import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ItemCard from './itemsCard';
import { withNavigation } from 'react-navigation';

const DisplayIteams = ({ title, items, navigation}) => {
    return <View style={styles.seachBar} >
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList 
            style={styles.listView}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        keyExtractor={(result) => result.id}
        renderItem={({item})=>{
            return <TouchableOpacity onPress={() => navigation.navigate('Details', {id: item.id})}>
                <ItemCard item={item}/>
            </TouchableOpacity> 
        }}
        />
    </View>;
};

const styles = StyleSheet.create({
   titleStyle:{
       fontSize: 18,
       fontWeight:'bold',
       marginLeft: 10,
       marginTop: 10,

   },
   listView:{
       marginBottom: 15,
   }
});

export default withNavigation(DisplayIteams);