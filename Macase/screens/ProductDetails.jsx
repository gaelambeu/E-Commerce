import { Image, Text, TouchableOpacity, View } from 'react-native'
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
      style={styles.image}
      />


      <View style={styles.details}>


        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>

          <View style={styles.priceWrapper}>
            <Text style={styles.price}>78 000 F CFA</Text>
          </View>
        </View>


        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1,2,3,4,5].map((index) => {
              <Ionicons />
            })}
          </View>
        </View>

      </View>

    </View>
  )
}

export default ProductDetails
