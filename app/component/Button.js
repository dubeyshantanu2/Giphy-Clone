import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Image, StyleSheet, FlatList, View, Text, TouchableOpacity, Dimensions, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Button(props) {
    {

        const { title, onPress } = props;
        return (
            <TouchableWithoutFeedback onPress={onPress}>
                <LinearGradient
                    colors={['#A13EF8', '#C388F6']}
                    style={styles.button}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>{title}</Text>
                </LinearGradient>
            </TouchableWithoutFeedback>
        );
    }
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
        height: 50,
        width: "90%",
    },
})