import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },

    empty: {
        alignSelf: 'center',
        marginTop: '50%',
        color: '#999',
        fontSize: 24,
        fontWeight: 'bold'
    },

    cardsContainer: {
        flex: 1,
        alignSelf: 'stretch',
        maxHeight: '85%',
    },

    card: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginHorizontal: 5,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },

    avatar: {
        flex: 1,
        height: '100%',
    },

    footer: {
      position: 'absolute',
      zIndex: 1,
      bottom: 15,
      alignSelf: 'flex-end',
      width: '90%',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      paddingVertical: 10,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10
    },

    name:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginHorizontal: 15
    },

    bio: {
        fontSize: 14,
        color: '#999',
        marginTop: 5,
        lineHeight: 18,
        marginHorizontal: 15
    },

    info: {
      zIndex: 0,
      alignSelf: 'flex-end',
      marginRight: 10
    },

    buttonsContainer: {
        flexDirection: 'row'
    },

    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
});