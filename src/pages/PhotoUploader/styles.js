import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        marginHorizontal: '5%'
    },

    frames: {
      height: '85%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },

    backText: {
        marginLeft: 2,
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#009dff'
    },

    saveButton: {
      marginTop: 20,
      alignItems: 'center',
      backgroundColor: '#f57f29',
      borderRadius: 4,
      paddingVertical: 15
    },

    buttonText: {
      fontWeight: 'bold',
      color: '#FFF'
    }
});