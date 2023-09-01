import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'
import ProductCardView from './ProductCardView'
import styles from './productRow.style'
import useFetch from "../../hook/useFetch"


const ProductRow = () => {
  const products = [1, 2, 3, 4];

  

  return (
    <View style={styles.container}>
        
          <FlatList
            data={products}
            renderItem={({ item }) => <ProductCardView/>}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
  
    </View>
  );
};

export default ProductRow  