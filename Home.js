import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

export default function Home() {

    const nData = [1,2,3,4]
    return (
        <View style={{padding:40}} >
          
          <Text style={styles.txtStyle}>Home</Text>
    
          <FlatList
            style={{alignSelf:'flex-start'}}
            numColumns={1}
            data={nData}
            keyExtractor={({item})=>item}
            renderItem={({item}) => <Text style={{margin:5,textAlign:'center'}}>{'Data'+item+'\n'}</Text>}/>
         
        </View>
    )
}

const styles = StyleSheet.create({
    txtStyle: {
      fontSize: 30,
      fontWeight: "bold",
      marginBottom:35,
    }, 
});