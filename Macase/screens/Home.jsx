import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import styles from './home.style'

const Home = () => {
  return (
    <SafeAreaView>
        <View style={styles.appBarWrapper}>
          <View style={styles.appBar}>
            <Ionicons name='location-outline' size={24} />

            <Text style={styles.location}>Abidjan Côte d'Ivoire</Text>

            <View style={{ alignItems: "flex-end"}}>
              <View style={styles.cartCount}>
                <Text style={styles.cartNumber}>0</Text>
              </View>
            </View>
          </View>
        </View>
    </SafeAreaView>
  )
}

export default Home
