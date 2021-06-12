import React,  {useState}  from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import SocialButton from '../../components/SocialButton';

const LogIn = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    return (
      <ScrollView contentContainerStyle={styles.container}>
          <Image source={require('../../assets/download1.png')} />
        <Text style={styles.text}>Fulletron India</Text>
  
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
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
        />
  
        <FormButton
          buttonTitle="Sign In"
          onPress={() => navigation.navigate('MainScreen')}
        />
  
        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
          <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity>
  
          <View>
            <SocialButton
              buttonTitle="Sign In with Facebook"
              btnType="facebook"
              color="#4867aa"
              backgroundColor="#eae3c8"
              onPress={() => {}}
            />
  
            <SocialButton
             buttonTitle="Sign In with Google"
              btnType="google"
              color="#de4d41"
              backgroundColor="#f5e7ea"              
              onPress={() => {}}
            />
          </View>
        
  
        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.navButtonText}>
            Don't have an acount? Create here
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
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
    },
    text: {
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
    },
    Social:{
      height: 20,
      width: 20
    }
       
  });

  export default LogIn;