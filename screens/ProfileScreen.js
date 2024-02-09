// @ts-check
import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'

const ProfileScreen = () => {
  const { state, signOut } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      {state.userInfo && (
        <>
          <Text>{`Given name: ${state.userInfo.givenName}`}</Text>
          <Text>{`Family name: ${state.userInfo.familyName}`}</Text>
          <Text>{`Username: ${state.userInfo.username}`}</Text>
          <Text>{`E-Mail: ${state.userInfo.email}`}</Text>
        </>
      )}
      <Button onPress={signOut} title={'Sign out'} />
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

export { ProfileScreen }
