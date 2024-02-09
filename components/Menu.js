import React, { useContext } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../context/AuthContext'

const Menu = () => {
  const { hasRole } = useContext(AuthContext)
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      {hasRole('Manager') && (
        <Button
          onPress={() => navigation.navigate('Manager')}
          title={'Manager'}
        />
      )}
      {hasRole('IC') && (
        <Button onPress={() => navigation.navigate('IC')} title={'IC'} />
      )}
      <Button
        onPress={() => navigation.navigate('Profile')}
        title={'Profile'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-evenly',
  },
})

export { Menu }
