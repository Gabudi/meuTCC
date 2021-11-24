import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function ChatsAdvogado() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>
        TELA CHATS ADVOGADOS
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold'
    }

})