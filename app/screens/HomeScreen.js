import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, } from 'react-native';

import axios from 'axios';



const HomeScreen = ({ navigation }) => {

    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://api.giphy.com/v1/gifs/trending?api_key=mRTeFedkvCqqJJF0exN0CRl12ZPkkJuY&limit=10",
        }).then(function (res) {
            setGifs(res.data.data[0].images.original.url);
            // console.log(res.data.data[0].url);
        })
            .catch(function (error) {
                console.log(error.message)
            })
    }, []);

    return (
        <View style={styles.view}>
            <StatusBar style="dark" />
            <Image
                style={{
                    height: 100,
                    width: 200
                }}
                source={{ gifs }}

            />
        </View>
    );
}


const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'black'
    },
    textInput: {
        width: '100%',
        height: 50,
        color: 'white'
    },
    image: {
        width: 300,
        height: 150,
        borderWidth: 3,
        marginBottom: 5
    },
});

export default HomeScreen;