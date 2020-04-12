import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center'
    },

    backText: {
        marginLeft: 2,
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#009dff'
    },

    logoutButton: {
      borderWidth: 1,
      backgroundColor: '#FFF',
      borderColor: '#e5e5e5',
      paddingVertical: 15,
      alignItems: 'center'
    },

    logoutText: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#6e6e6e'
    }
});