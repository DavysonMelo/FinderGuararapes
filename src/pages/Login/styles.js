import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    logo: {
        width: 200,
        height: 70,
        resizeMode: 'cover'
    },
    emailInput: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        paddingHorizontal: 15
    },
    passwordInput: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 10,
        paddingHorizontal: 15
    },
    loginButton: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#f57f29',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30
    },
    loginButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    },
    registerButton: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#ccc',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30
    },
    registerButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
});