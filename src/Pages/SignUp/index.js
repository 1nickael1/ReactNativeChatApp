import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {Input} from 'react-native-elements';
import auth from '@react-native-firebase/auth';

import {
  Container,
  Content,
  HeaderView,
  HeaderText,
  DescriptionView,
  DescriptionText,
  ButtonView,
  ButtonText,
} from './styles';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSingUp() {
    if (email != '' && password != '') {
      try {
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            Alert.alert('Sucesso', 'Usuário criado com sucesso.', [
              {text: 'Ok', onPress: () => navigation.goBack()},
            ]);
          })
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
          <HeaderText>Register</HeaderText>
        </HeaderView>
        <DescriptionView>
          <DescriptionText>Se cadastre!</DescriptionText>
        </DescriptionView>

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
        <ButtonView onPress={handleSingUp}>
          <ButtonText>Cadastrar</ButtonText>
        </ButtonView>
      </Content>
    </Container>
  );
};

export default SignUp;
