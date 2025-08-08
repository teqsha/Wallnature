import React from 'react';
<<<<<<< HEAD
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
=======
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {items} from '../screen/WallpaperImage';
>>>>>>> 076ad626251238dfed5c0470ae1d3d7de412380b

const WallPaperScreen = ({ title, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default WallPaperScreen ;

const styles = StyleSheet.create({
  card: {
    width: '47%',
    margin: '1.5%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 170,
    borderRadius: 15,
  },
  title: {
    marginTop: 5,
    textAlign: 'center',
    color: '#fff',
    fontWeight:'600',
},
});
