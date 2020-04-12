import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20
    },

    photos: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 30
    },

    title: {
        marginTop: 15,
        alignSelf: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#a2a2a2'
    },

    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        marginHorizontal: 15
    },

    media: {
        borderRadius: 35,
        marginTop: 80,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius:10,
    },

    edit: {
        alignItems: 'center'
    },

    settings: {
        alignItems: 'center'
    },

    btnMedia: {
        width: 70,
        height: 70,
        alignSelf: 'center',
        borderRadius: 35,
        backgroundColor: '#ef790e',
    },

    btnCfg: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },

    btnEdit: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },

    plus: {
        position: 'absolute',
        top: 42,
        left: 48,
    }
});