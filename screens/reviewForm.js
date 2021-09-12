import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import {Formik} from "formik";
import { globalStyles } from '../styles/globalStyles';
import * as yup from "yup";
import FlatButton from '../shared/flatButton';
export default function ReviewForm ({addReview}){

    const reviewSchema=yup.object({
        title:yup.string().required().min(4),
        body:yup.string().required().min(8),
        rating:yup.string().test("is-num-1-5","Rating must be bw 1 and 5",(val)=>{
          return parseInt(val)<6 && parseInt(val)>0
       })
     })

    return(

        <View style={globalStyles.container}>
        <Formik 
          initialValues={{title:"",body:"",rating:""}}
          onSubmit={(values,actions)=>{
              actions.resetForm();
              addReview(values)
          }}
          validationSchema={reviewSchema}
         
        >
        {(props)=>(
            <View>
                <TextInput
                 style={globalStyles.input}
                 placeholder="Review title"
                 onChangeText={props.handleChange("title")}
                 value={props.values.title}
                 onBlur={props.values.title}
                 />
                 <Text  style={globalStyles.errorText}>{props.values.title && props.errors.title}</Text>
                  <TextInput
                  multiline 
                 
                 style={globalStyles.input}
                 placeholder="Review Body"
                 onChangeText={props.handleChange("body")}
                 value={props.values.body}
                 onBlur={props.values.body}
                 />
                <Text  style={globalStyles.errorText}>{props.values.body && props.errors.body}</Text>
                 <TextInput
                 style={globalStyles.input}
                 placeholder="Review Rating (1-5"
                 onChangeText={props.handleChange("rating")}
                 value={props.values.rating}
                 keyboardType="numeric"
                 onBlur={props.values.rating}
                 />
                <Text style={globalStyles.errorText} >{props.values.rating &&  props.errors.rating}</Text>
                <FlatButton text="submit"  onPress={props.handleSubmit}/>
            </View>
        )}
            
        </Formik>


        </View>

    )

}