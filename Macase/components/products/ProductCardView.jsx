import { Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import styles from './ProductCardView.style'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'


const ProductCardView = () => {
    const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
        <View style={styles.container}> 
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri:"https://i.pinimg.com/564x/88/b9/82/88b9820cb6ddbeaf55ff56c08033cc8f.jpg"}}
                    style={styles.image}
                />
            </View>

            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>Product hjjjjaaaaaaaaaaaaaaaaanjzioazniojnjanjonzajonioaznio</Text>
                <Text style={styles.supplier} numberOfLines={1}>Product</Text>
                <Text style={styles.price}>125000 F CFA</Text>
            </View>

            <TouchableOpacity style={styles.addBtn}>
            <Ionicons name="add-circle" size={35} color={COLORS.primary}/>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView

