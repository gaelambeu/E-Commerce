import { View, Text } from 'react-native'
import React from 'react'
import styles from './headings.style'

const Headings = () => {
  return (
    <View style={styles.container} >
      <View style={styles.header}  >
        <Text style={styles.header}>New Rivals</Text>
      </View>
    </View>
  )
}

export default Headings