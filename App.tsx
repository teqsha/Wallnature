import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'lightblue'}}>
      <Text style={styles.container}>App</Text>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    fontWeight:'bold',
    alignSelf:'center',
    fontSize:20
  }
})