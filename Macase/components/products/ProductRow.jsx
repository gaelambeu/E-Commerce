import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'
import ProductCardView from './ProductCardView'
import styles from './productRow.style'
import useFetch from "../../hook/useFetch"


const ProductRow = () => {
  const {data, isLoading, error} = useFetch()
  const products = [1, 2, 3, 4];

  return (
    <View style={styles.container}>
        
          
  
    </View>
  );
};

export default ProductRow  