import { TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './search.style'
import { Feather, Ionicons } from '@expo/vector-icons'
import {useNavigation} from "@react-navigation/native"
import { COLORS, SIZES } from '../constants'


const Search = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
            <TouchableOpacity>
                <Ionicons name="camera-outline"  size={SIZES.xLarge} style={styles.searchIcon} />
      
            </TouchableOpacity>
            
            <View style={styles.searchWrapper}>
                <TextInput
                    style={styles.searchInput}
                    value=""
                    onPressIn={() => {} }
                    placeholder="What are you looking far"
                />
            </View>

            <View style={styles.searchBtn}>
                <TouchableOpacity>
                    <Feather name="search" size={24} color={COLORS.offwhite} />
                </TouchableOpacity>   
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Search

