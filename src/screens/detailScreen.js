import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList} from 'react-native';
import useDetails from '../Hooks/useDetails';
import { Feather } from '@expo/vector-icons';

const detailScreen = ({ navigation})=>{
    let id = navigation.getParam('id');
    const [detailResult, details] = useDetails()
    useEffect(() => {
        details(id);
    }, [])
    if (!detailResult) {
        return <View>
            <Text>Loading.......</Text>
        </View>
    }
    let { name, image_url, review_count, rating, photos } = detailResult;
    return <> 
       <View style={styles.detail}>
        <Image
            style={styles.image}
            source={{
                uri: image_url,
            }}
        />
        <Text style={styles.title}>{name}</Text>
        <View style={styles.details}>
            <Text style={styles.rating}>{rating} <Feather name="star" style={styles.Icon} color="#bdb819" /></Text>
            <Text style={styles.count}> count: {review_count}</Text>
        </View>

        
      </View>
        <FlatList
            style={styles.listView}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={photos}
            keyExtractor={(photos) => photos}
            renderItem={({ item }) => {
                return <Image
                    style={styles.subImg}
                    source={{
                        uri: item,
                    }}
                />
            }}
        />
    </>
};

const styles = StyleSheet.create({
detail:{
    backgroundColor:'white',
    borderRadius: 15,
    margin: 15,
},
image:{
    height:300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    margin: 5
},
subImg:{
    height:150,
    width:150,
    margin:5,
    borderRadius: 15
},
title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    margin: 5,
},
  rating: {
    },
    count: {
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        marginBottom: 10
    },
    Icon: {
        fontSize: 18,
        alignSelf: 'center'
    },
    listView:{
        marginBottom: 15,
    }
});

export default detailScreen;