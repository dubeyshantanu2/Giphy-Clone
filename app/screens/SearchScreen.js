import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, FlatList, View, TextInput, Dimensions, } from 'react-native';


const SearchScreen = ({ navigation }) => {
    const [gifs, setGifs] = useState([]);
    const [term, updateTerm] = useState('');

    async function fetchGifs() {
        try {
            const API_KEY = "mRTeFedkvCqqJJF0exN0CRl12ZPkkJuY";
            const BASE_URL = 'http://api.giphy.com/v1/gifs/search';
            const resJson = await fetch(`${BASE_URL}?api_key=${API_KEY}&q=${term}`);
            const res = await resJson.json();
            setGifs(res.data);
        } catch (error) {
            console.warn(error);
        }
    }

    function onEdit(newTerm) {
        updateTerm(newTerm);
        fetchGifs();
    }

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <View style={{ width: "100%", height: "15%", alignItems: "center", justifyContent: "center", marginTop: "5%", flexDirection: "row" }}>

                <TextInput placeholder="Search Giphy"
                    placeholderTextColor='#000'
                    style={styles.textInput}
                    onChangeText={(text) => onEdit(text)} />

            </View>

            <FlatList
                data={gifs}
                renderItem={({ item }) => (
                    <Image
                        resizeMode='contain'
                        style={styles.image}
                        source={{ uri: item.images.original.url }}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    button: {
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 50,
        height: 70,
        width: "90%",

    },
    textInput: {
        width: '82%',
        height: "20%",
        height: 50,
        color: 'black',
        backgroundColor: "#fff",
    },
    image: {
        width: 300,
        height: 150,
        borderWidth: 3,
        marginBottom: 5
    },
});

export default SearchScreen;