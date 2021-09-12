import { StyleSheet } from "react-native";

export const globalStyles= StyleSheet.create({
    container:{
        padding:20,
      
    },
    titleText:{
        fontFamily:"Nunito_700Bold",
        fontSize:18
    },
    input:{
     borderWidth:1,
     borderColor:10,
     padding:10,
     fontSize:18,
     borderRadius:6
},
errorText:{
    textAlign:'center',
    color:"red",
    marginBottom:10,
    marginTop:6,
    

}
})
 export const images={

    ratings:{
          "1":require("../assets/rating-1.png"),
          "2":require("../assets/rating-2.png"),
          "3":require("../assets/rating-3.png"),
          "4":require("../assets/rating-4.png"),
          "5":require("../assets/rating-5.png"),
    }
};