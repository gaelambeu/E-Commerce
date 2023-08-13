import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './ProductCardView.style'


const ProductCardView = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
        <View style={styles.container}> 
            <View style={styles.imageContainer}>
                
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView

