import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../Const/color';
import { Input, Center, Button } from "native-base"

export default function Login(props) {
    const { navigation } = props
    return (
        <View style={{ ...styles.body }}>
            <View style={{ ...styles.box }}>
                <View>
                    <Text style={{ ...styles.inputText }}>E-Mail</Text>
                    <Input variant="underlined" placeholder="Email" />
                </View>
                <View>
                    <Text style={{ ...styles.inputText }}>Password</Text>
                    <Input variant="underlined" placeholder="Password" />
                </View>
                <View>
                    <Center>
                        <Button onPress={() => navigation.navigate('Home')} style={{ backgroundColor: 'transparent' }}>
                            <Text style={{ ...styles.bottomText, color: COLORS.dPink }}>Login</Text>
                        </Button>
                        <Button onPress={() => navigation.navigate('Signup')} style={{ backgroundColor: 'transparent' }}>
                            <Text style={{ ...styles.bottomText, color: COLORS.yellow }}>Switch to Sign Up</Text>
                        </Button>
                    </Center>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: COLORS.lPink
    },
    box: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderRadius: 10,

        backgroundColor: COLORS.white,
        padding: 20,
        width: 300
    },
    inputText: {
        fontWeight: 'bold'
    },
    bottomText: {
        fontSize: 20
    }
});
