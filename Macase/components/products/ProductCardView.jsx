import { Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import styles from './ProductCardView.style'


const ProductCardView = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
        <View style={styles.container}> 
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri:"https://i.pinimg.com/564x/e0/0e/4c/e00e4ca4f78bb6f293d0551840e35ef8.jpg"}}
                    style={styles.image}
                />
            </View>

            <View style={styles.details}>
                <Text style={styles.title}>Product</Text>
                <Text style={styles.title}>Product</Text>
                <Text style={styles.title}>Product</Text>
                <Text style={styles.title}>Product</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView

