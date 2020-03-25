import React from 'react';
import {View, ActivityIndicator, Modal, StyleSheet, Text} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
export default function LoadingModal({visible}){
    return(
        <View>
            <Modal
                transparent={true}
                visible={visible}
                animationType="fade"
            >
                <View 
                style={styles.modal}>
                    <View style={styles.loadingInfo}>
                        <ActivityIndicator size="large" color="#f57f29"/>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modal:{
        backgroundColor:'#00000080',
        flex:1,
    },
    loadingInfo:{
        marginTop:hp('50%'),
        marginHorizontal:wp('27%'),
    }
})