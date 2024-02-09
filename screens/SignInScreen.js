// @ts-check
import React, { useContext } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'

const SignInScreen = () => {
  const { signIn } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Button onPress={signIn} title={'Sign in'} />
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

export { SignInScreen }
