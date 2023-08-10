import { View, Text } from 'react-native'
import React from 'react'
import styles from './welcome.style'


const Welcome = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.welcomeText}>Find the Most</Text>
    </View>
  )
}

export default Welcome