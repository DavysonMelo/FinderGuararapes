import React from 'react';
import { View, SafeAreaView, Text, Image, ScrollView } from 'react-native';

import styles from './styles';

function Matches(){
    return (
        <SafeAreaView style={styles.container}>

          <Text style={styles.title}>Matches</Text>

          <ScrollView
            horizontal
            style={styles.matchList}
            showsHorizontalScrollIndicator={false}
          >

            <View style={styles.match}>
              <Image 
                source={{ uri: 'https://image.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg' }} 
                style={styles.avatar}  
              />
              <Text style={styles.name}>Duda</Text>
            </View>

          </ScrollView>

          <View style={styles.messages}>

            <Text style={styles.title}>Mensagens</Text>
            <Text style={{ 
              color: '#a5a5a5',
              fontWeight: 'bold',
              marginLeft: 15 
            }}>Coming soon</Text>

          </View>
        </SafeAreaView>
    )
}

export default Matches;