import React,  {useState}  from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import SocialButton from '../../components/SocialButton';

const SignUp = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    
    return (
      <ScrollView contentContainerStyle={styles.container}>
          
        <Text style={styles.text}>Create an Account.</Text>
  
        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="Customer-ID/LAN/UserName"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
  
        <FormInput
          labelValue={confirmPassword}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText=" Confirm Password"
          iconType="lock"
          secureTextEntry={true}
        />

        <FormInput
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
        />
  
        <FormButton
          buttonTitle="Sign Up"
          onPress={() => navigation.navigate('MainScreen')}
        />
  
        <View>
          <Text>

          </Text>
        </View>

          <View>
            <SocialButton
              buttonTitle="Sign Up with Facebook"
              btnType="facebook"
              color="#4867aa"
              backgroundColor="#eae3c8"
              onPress={() => {}}
            />
  
            <SocialButton
             buttonTitle="Sign Up with Google"
              btnType="google"
              color="#de4d41"
              backgroundColor="#f5e7ea"              
              onPress={() => {}}
            />
          </View>
        
  
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('LogIn')}>
          <Text style={styles.navButtonText}>
            Already have an acount? Sign In here
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f9fafd',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    text: {
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
    },
    Social:{
      height: 20,
      width: 20
    },
    textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 35,
      justifyContent: 'center',
    },
    color_textPrivate: {
      fontSize: 13,
      fontWeight: '400',
      color: 'grey',
    },
       
  });

  export default SignUp;