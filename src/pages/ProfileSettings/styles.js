import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },

    header:{
        zIndex: 1,
        width: '100%',
        height: 46,
        position: 'absolute',
        backgroundColor: '#f5f5f5'
    },

    btnBack: {
        marginTop: 30,
        marginLeft: 10,
        flexDirection:'row'
    },

    backText: {
        marginLeft: 2,
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#61a8fa'
    },
});