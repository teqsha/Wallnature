import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import WallPaperScreen from '../screen/WallPaperScreen';
import {wallpaperImage} from '../screen/WallpaperImage';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.heading}>wallpaper</Text>
        <FlatList
          data={wallpaperImage}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <WallPaperScreen title={item.title} image={item.image} onPress={() => { }} />
          )}
          contentContainerStyle={styles.flatList}
        />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
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