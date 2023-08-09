import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style'

const Home = () => {
  return (
    <SafeAreaView>
      <Text style={styles.textStyle}>Home</Text>
      <View style={styles.appBarWrapper}>

      </View>
    </SafeAreaView>
  )
}

export default Home
