import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './productDetails.style'
import { Ionicons } from '@expo/vector-icons'
import {COLORS, SIZES} from '../constants/index' 

const ProductDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image 
      source={{uri: "https://i.pinimg.com/564x/88/b9/82/88b9820cb6ddbeaf55ff56c08033cc8f.jpg"}}
      />

    </View>
  )
}

export default ProductDetails
