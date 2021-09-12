import React from 'react';
import { View } from 'react-native';
import Home from './screens/home';
import ReviewDetails from './screens/reviewDetails';
import About from "./screens/about";
import AppLoading from 'expo-app-loading';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {useFonts,Nunito_400Regular,Nunito_700Bold} from '@expo-google-fonts/nunito';
import Root from './screens/root';


export default function App() {

  const HomeStack = createStackNavigator();
  const Drawer= createDrawerNavigator();
   
  let [fontsLoaded] = useFonts({ Nunito_400Regular,Nunito_700Bold });

  // if (fontsLoaded) {
  //   return    (   <NavigationContainer>
                     
  //                        <HomeStack.Navigator >
  //           <HomeStack.Screen name="Home" component={Home} options={{
  //             title:"Home Screen",headerStyle:{backgroundColor:"#444"},headerTintColor:"#fff"}} />
  //           <HomeStack.Screen name="ReviewDetails" component={ReviewDetails} />
  //          </HomeStack.Navigator>
  //            </NavigationContainer>
  //        ) ; 
  // } else{
  //   return (
  //     <AppLoading />
  //      );
  // }

  if (fontsLoaded) {
    return    (   <NavigationContainer>
                       <Drawer.Navigator>
                              <Drawer.Screen name="Home" component={Root} 
                              options={{headerTitle:"GameZone"}}  />
                              <Drawer.Screen name="About" component={About} 
                              options={{headerTitle:" About GameZone"}}/>
                       </Drawer.Navigator>
                 </NavigationContainer>
         ) ; 
  } else{
    return (
      <AppLoading />
       );
  }

}


