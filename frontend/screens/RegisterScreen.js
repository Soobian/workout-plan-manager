import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input';

const RegisterScreen = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')

    return(
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}>
          <View style={styles.upperContener}>
          <Text style={styles.upperContenerText}>Create new acount</Text>
          </View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inputContainer}>
            <FloatingLabelInput
            
                label={'Username'}
                value={userName}
                onChangeText={text => setUserName(text)}
                containerStyles={{
                  backgroundColor: 'white',
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  borderRadius: 10,
                  marginTop: 10,
                  shadowColor: "#000",
                  shadowOffset: {
                  width: 0,
                  height: 3,
                  },
                  shadowOpacity: 0.27,
                  shadowRadius: 4.65,
                  elevation: 6,
                  }}
                  customLabelStyles={{
                    colorFocused: 'gray',
                    fontSizeFocused: 10,
                  }}
              />
              <FloatingLabelInput
                label={'Email'}
                value={email}
                onChangeText={text => setEmail(text)}
                containerStyles={{
                  backgroundColor: 'white',
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  borderRadius: 10,
                  marginTop: 10,
                  shadowColor: "#000",
                  shadowOffset: {
                  width: 0,
                  height: 3,
                  },
                  shadowOpacity: 0.27,
                  shadowRadius: 4.65,
                  elevation: 6,
                  
                  }}
                  customLabelStyles={{
                    colorFocused: 'gray',
                    fontSizeFocused: 10,
                  }}
              />
              <FloatingLabelInput
                label={'Password'}
                isPassword
                darkTheme
                secureTextEntry
                value={password}
                onChangeText={text => setPassword(text)}
                containerStyles={{
                  backgroundColor: 'white',
                  color: '#03767B',
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  borderRadius: 10,
                  marginTop: 10,
                  shadowColor: "#000",
                  shadowOffset: {
                  width: 0,
                  height: 3,
                  },
                  shadowOpacity: 0.27,
                  shadowRadius: 4.65,
                  elevation: 6,
                  }}
                  customLabelStyles={{
                    colorFocused: 'gray',
                    fontSizeFocused: 10,
                  }}
              />
              <FloatingLabelInput
                label={'Confirm password'}
                isPassword
                darkTheme
                secureTextEntry
                value={repeatedPassword}
                onChangeText={text => setRepeatedPassword(text)}
                containerStyles={{
                  backgroundColor: 'white',
                  color: '#03767B',
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  borderRadius: 10,
                  marginTop: 10,
                  shadowColor: "#000",
                  shadowOffset: {
                  width: 0,
                  height: 3,
                  },
                  shadowOpacity: 0.27,
                  shadowRadius: 4.65,
                  elevation: 6,
                  }}
                  customLabelStyles={{
                    colorFocused: 'gray',
                    fontSizeFocused: 10,
                  }}
              />
            </View>
        </TouchableWithoutFeedback>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
              //onPress={handleLogin}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <View>
          <Text style={styles.smallText}>
            You already have an account?
            <TouchableOpacity>
              <Text style={styles.buttonLabelText}>
                Sign in
              </Text>
          </TouchableOpacity>
          </Text>
        </View>
        </KeyboardAvoidingView> 
        )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%',
      borderRadius: 20,
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 15,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    button: {
      backgroundColor: '#03767B',
      width: '80%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#03767B',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#03767B',
      fontWeight: '700',
      fontSize: 16,
    },
    upperContener:{
      color: '#03767B',
      backgroundColor: '#03767B',
      width: '103%',
      height: '35%',
      fontSize: 16,
      borderRadius: 10,
      padding: 10,
      top: -30,
    },
    upperContenerText:{
      color: 'white',
      fontWeight: '700',
      fontSize: 28,
      justifyContent: 'center',
      alignItems: 'center',
      textAlignVertical: 'bottom',
      position: 'absolute',  
      bottom: 20,
      left: 30,
    },
    smallText:{
      color: 'gray',
      fontWeight: '700',
      fontSize: 12,
      justifyContent: 'center',
      alignItems: 'center',
      textAlignVertical: 'bottom',
      marginTop: 20
    },
    buttonLabelText:{
      color: '#03767B',
      fontWeight: '700',
      fontSize: 14,
      marginLeft: 15,
    }
  })