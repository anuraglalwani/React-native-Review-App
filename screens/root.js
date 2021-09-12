import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './home';
import ReviewDetails from './reviewDetails';

export default function Root (){

    const HomeStack = createStackNavigator();
    
    return(

       
                   <HomeStack.Navigator options={{backgroundColor:"#777"}}  >
                    <HomeStack.Screen name="Home" component={Home} options={{
                    title:"Home Screen",
                    headerTintColor:"#fff",headerShown: false}} />
                    <HomeStack.Screen name="ReviewDetails"
                     component={ReviewDetails} 
                     
                      />
                   </HomeStack.Navigator>
 
       

    )

}