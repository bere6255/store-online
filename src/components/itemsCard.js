import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const itemCard = ({item})=>{
    let { name, image_url, rating, review_count} = item;
    if(image_url === '' ) image_url = 'https://image.shutterstock.com/image-photo/view-lagos-lagoon-victoria-island-260nw-1066980758.jpg';
    
    return <View style={styles.card}>
        <Image
            style={styles.image}
            source={{
                uri: image_url,
            }}
        />
        <Text style={styles.name}> {name}</Text>
        <View style={styles.details}>
            <Text style={styles.rating}>{rating} <Feather name="star" style={styles.Icon} color="#bdb819" /></Text>
            <Text style={styles.count}> count: {review_count}</Text>
        </View>
    </View>
};

const styles = StyleSheet.create({
    card:{
        marginHorizontal: 10,
        borderRadius: 15,
        backgroundColor: '#ffffff',
        width: 150,
        marginTop: 5
    },
    image:{
        height: 150,
        width: 150,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        marginBottom: 10,
    },
    titleName:{
        height: 30,
        marginBottom: 5,
        paddingHorizontal: 5,
    },
    name:{
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 8,
        paddingHorizontal: 5,
        
    },
    rating:{
    },
    count:{
    },
    details:{
        flexDirection:'row',
        justifyContent: 'space-between',
         paddingHorizontal: 5,
         marginBottom: 5
    },
    Icon:{
        fontSize: 18,
        alignSelf: 'center'
    }
});

export default itemCard;