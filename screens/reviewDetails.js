import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Card from '../shared/card';
import { globalStyles,images } from '../styles/globalStyles';

export default function ReviewDetails ({navigation,route}){
    // function handlePress(){
    //     navigation.navigate("Home");
    // }
    const data= route.params;
    const rating= data.rating
   
   
    return(
       
        <View style={globalStyles.container}>
        <Card>
        <Text  style={globalStyles.titleText}>Review Details</Text>
            <Text style={globalStyles.titleText}>{data.title}</Text>
            <Text style={globalStyles.titleText}>{data.body}</Text>
            <Text style={globalStyles.titleText}>{data.rating}</Text>

            <View style={styles.rating}>
              <Text>Game Rating</Text>
              {/* <Image source={images.ratings[rating]} /> */}
           
              <Image source={require("../assets/rating-5.png")} />
            </View>
        </Card>
       

            {/* <Button title="go to home page" onPress={handlePress} /> */}
        </View>

    )

}
const styles=StyleSheet.create({
    rating:{
        flex:"row"
    }
})
