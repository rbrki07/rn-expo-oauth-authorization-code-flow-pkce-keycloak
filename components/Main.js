// @ts-check
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthContext } from '../context/AuthContext'
import { HomeScreen } from '../screens/HomeScreen'
import { ProfileScreen } from '../screens/ProfileScreen'
import { SignInScreen } from '../screens/SignInScreen'
import { ManagerScreen } from '../screens/ManagerScreen'
import { ICScreen } from '../screens/ICScreen'

const NativeStack = createNativeStackNavigator()

const Main = () => {
  const { hasRole, state } = useContext(AuthContext)

  return (
    <NavigationContainer>
      <NativeStack.Navigator>
        {state.isSignedIn ? (
          <>
            <NativeStack.Screen name={'Home'} component={HomeScreen} />
            {hasRole('Manager') && (
              <NativeStack.Screen name={'Manager'} component={ManagerScreen} />
            )}
            {hasRole('IC') && (
              <NativeStack.Screen name={'IC'} component={ICScreen} />
            )}
            <NativeStack.Screen name={'Profile'} component={ProfileScreen} />
          </>
        ) : (
          <NativeStack.Screen
            name={'SignIn'}
            component={SignInScreen}
            options={{ animationTypeForReplace: 'pop' }}
          />
        )}
      </NativeStack.Navigator>
    </NavigationContainer>
  )
}

export { Main }
