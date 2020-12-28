import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import LottieView from 'lottie-react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  Container,
  Content,
  HeaderView,
  HeaderText,
  DescriptionView,
  DescriptionText,
  SignUpView,
  SignUpText,
  ButtonView,
  ButtonText,
} from './styles';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function navigateToSignUp() {
    navigation.navigate('SignUp');
  }

  function handleSignIn() {
    if (email != '' && password != '') {
      try {
        auth()
          .signInWithEmailAndPassword(email, password)
          .catch((err) => {
            Alert.alert('Error', `${err.toString()}`);
          });
      } catch (err) {
        console.log(err);
      }
    } else {
      Alert.alert(
        'Cadastro inválido',
        'Os campos Email e Password não podem estar vazios.',
        [{text: 'OK'}],
        {cancelable: false},
      );
    }
  }

  return (
    <Container>
      <Content>
        <HeaderView>
          <HeaderText>Login</HeaderText>
        </HeaderView>
        <DescriptionView>
          <DescriptionText>Entre para começar a conversar!</DescriptionText>
        </DescriptionView>
        <LottieView
          source={require('../../Assets/chatloginlottie.json')}
          autoPlay
          loop
          style={{top: -hp(5)}}
        />
        <Input
          placeholder="Email"
          leftIcon={{type: 'font-awesome-5', name: 'user'}}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          leftIcon={{type: 'font-awesome-5', name: 'key'}}
          onChangeText={(text) => setPassword(text)}
        />
        <ButtonView onPress={handleSignIn}>
          <ButtonText>Entrar</ButtonText>
        </ButtonView>
        <SignUpView onPress={navigateToSignUp}>
          <SignUpText>Ainda não tem conta? Se cadastre!</SignUpText>
        </SignUpView>
      </Content>
    </Container>
  );
};

export default SignIn;
