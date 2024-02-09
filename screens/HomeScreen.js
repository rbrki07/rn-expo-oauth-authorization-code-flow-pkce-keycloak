// @ts-check
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Menu } from '../components/Menu'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Menu />
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

export { HomeScreen }
