import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Image, StyleSheet, FlatList, View, Text, TouchableOpacity, Dimensions, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from "../component/Button";

const { width, height } = Dimensions.get('window');
const OnboardingScreen = ({ navigation }) => {

    return (
        <ImageBackground source={require('../assets/SmartSelect_20220224-001013_Chrome.gif')} style={{ flex: 1 }}  >
            <StatusBar style="dark" />
            <View style={styles.container}>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontWeight: "bold", color: "white", fontSize: 80, marginTop: 150 }}>GIPHY</Text>
                    <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>BE ANIMATED</Text>
                </View>
                <View style={{ width: "100%", alignItems: "center", bottom: 50 }}>
                    <Button title="Get Started!" onPress={() => navigation.navigate("LoginScreen")} />
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#000',
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
});

export default OnboardingScreen;