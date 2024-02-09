// @ts-check
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ICScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Individual-Contributor-Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
})

export { ICScreen }
