import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },

    backText: {
        marginLeft: 2,
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#009dff'
    },

    form: {
      marginHorizontal: 20
    },

    title: {
      marginTop: 10
    },

    input: {
      alignSelf: 'stretch',
      height: 46,
      borderWidth: 1,
      paddingHorizontal: 10,
      borderColor: '#ddd',
      backgroundColor: '#FFF',
      marginTop: 10
    },

    button: {
      height: 46,
      alignSelf: 'stretch',
      backgroundColor: '#f57f29',
      borderRadius: 4,
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },

    password: {
      height: 46,
      borderWidth: 1,
      borderColor: '#ddd',
      backgroundColor: '#FFF',
      marginTop: 10,
      paddingHorizontal: 10
    },

    cancelButton: {
      height: 46,
      alignSelf: 'stretch',
      backgroundColor: '#c3c3c3',
      borderRadius: 4,
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },

    buttonText: {
      fontWeight: 'bold',
      color: '#FFF'
    }
});