import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Dimensions, TextInput } from 'react-native';

import Button from "../component/Button";

const { width, height } = Dimensions.get('window');
const LoginScreen = ({ navigation }) => {

    return (

        <View style={styles.container}>
            <StatusBar style="dark" />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontWeight: "bold", color: "white", fontSize: 80, marginTop: 80 }}>GIPHY</Text>
                <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>BE ANIMATED</Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", height: 50, width: "90%", alignItems: "center", backgroundColor: "#767676", borderRadius: 40, amarginTop: "5%" }}>
                <View style={{ justifyContent: "center", height: 50, width: "50%", alignItems: "center", backgroundColor: "#4EFF8B", borderRadius: 40 }}>
                    <Text>Login</Text>
                </View>

                <Text style={{ marginRight: "20%" }}>Signup</Text>

            </View>

            <View style={{ width: "90%", height: "50%", justifyContent: "center", alignItems: "center", }}>
                <View style={{ width: "100%" }}>
                    <TextInput placeholder="Email Address"
                        placeholderTextColor='#ddd'
                        style={styles.textInput}
                    />
                </View>
                <View style={{ width: "100%", marginTop: "5%" }}>
                    <TextInput placeholder="Username"
                        placeholderTextColor='#ddd'
                        style={styles.textInput}
                    />
                </View>
                <View style={{ width: "100%", marginTop: "5%", }}>
                    <TextInput placeholder="Password"
                        placeholderTextColor='#ddd'
                        style={styles.textInput}
                    />
                </View>
            </View>
            <View style={{ bottom: 50, width: "100%", alignItems: "center" }}>
                <Button title="Get Started!" />
            </View>
            <Text style={{ color: "white" }}>Forgot Password? </Text>
            <Text style={{ color: "grey", fontSize: 10, marginTop: "2%" }}>By logging in you agree to GHIPH's Terms and condition.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: "flex-start"
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
        padding: "5%",
        height: 50,
        color: 'black',
        backgroundColor: "#fff",
    },
});

export default LoginScreen;