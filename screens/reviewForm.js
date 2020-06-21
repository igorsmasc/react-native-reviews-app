import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

export default function ReviewForm({ addReview }) {
    
    return(
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
                >
                
                {({handleChange, values, handleSubmit}) => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Review Title'
                            name='title'
                            onChangeText={handleChange('title')} 
                            value={values.title}
                        />

                        <TextInput 
                            multiline
                            style={globalStyles.input}
                            placeholder='Review Body'
                            onChangeText={handleChange('body')} 
                            value={values.body}
                        />

                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={handleChange('rating')} 
                            keyboardType='numeric'
                            value={values.rating}
                        />
                        <Button title="Submit" color='maroon' onPress={handleSubmit} />
                    </View>
                )}

            </Formik>
        </View>
    )
}