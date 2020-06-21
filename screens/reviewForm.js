import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const ReviewSchema = yup.object({
    title: yup.string()
        .required('Title is a required field')
        .min(3, 'Title must be at least 3 characters'),
    body: yup.string()
        .required('Body is a required field')
        .min(8, 'Body must be at least 3 characters'),
    rating: yup.string()
        .required('Rating is a required field')
        .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        })
})

export default function ReviewForm({ addReview }) {
    
    return(
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={ReviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
                >
                
                {({
                    handleChange, 
                    values, 
                    handleSubmit, 
                    errors,
                    touched,
                    handleBlur
                }) => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Review Title'
                            name='title'
                            onChangeText={handleChange('title')} 
                            value={values.title}
                            onBlur={handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>{ touched.title && errors.title }</Text>

                        <TextInput 
                            multiline
                            style={globalStyles.input}
                            placeholder='Review Body'
                            onChangeText={handleChange('body')} 
                            value={values.body}
                            onBlur={handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>{  touched.body && errors.body }</Text>

                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={handleChange('rating')} 
                            keyboardType='numeric'
                            value={values.rating}
                            onBlur={handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>{  touched.rating && errors.rating }</Text>

                        <FlatButton text="Submit" onPress={handleSubmit} />
                    </View>
                )}

            </Formik>
        </View>
    )
}