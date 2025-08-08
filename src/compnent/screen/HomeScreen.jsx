import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
 import {WallPaperScreen} from '../screen/WallPaperScreen';
 
const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.Container}>
        <Text styles={styles.heading}>wallpaper</Text>
        <FlatList
        data={WallPaperScreen}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <WallPaperScreen title={item.title} image={item.image} onPress={() => {}} />
        )}
        contentContainerStyle={styles.flatList}
      />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    alignSelf: 'center',
  },
  flatList: {
    paddingBottom: 20,
  },
})


// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const HomeScreen = () => {
//   return (
//     <View>
//       <Text>HomeScreen</Text>
//     </View>
//   )
// }

// export default HomeScreen

// const styles = StyleSheet.create({})