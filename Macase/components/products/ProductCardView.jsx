import { Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import styles from './ProductCardView.style'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import ProductRow from './ProductRow'



const ProductCardView = () => {
    const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", )}>
        <View style={styles.container}> 
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri: "https://i.pinimg.com/236x/83/16/19/831619a3f9cfb9c28f9552366805b77c.jpg"}}
                    style={styles.image}
                />
            </View>

            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>
                    product
                </Text>

                <Text style={styles.supplier} numberOfLines={1}>
                    product
                </Text>

                <Text style={styles.price}>
                   product F CFA
                </Text>
            </View>

            <TouchableOpacity style={styles.addBtn}>
            <Ionicons name="add-circle" size={35} color={COLORS.primary}/>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView

