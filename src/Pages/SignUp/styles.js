import styled from 'styled-components/native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Content = styled.ScrollView``;

export const HeaderView = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${hp(5)}px;
`;
export const HeaderText = styled.Text`
  font-size: ${wp(10)}px;
  color: #000;
`;

export const DescriptionView = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${hp(5)}px;
  margin-bottom: ${hp(5)}px;
`;
export const DescriptionText = styled.Text`
  font-size: ${wp(4)}px;
  color: #000;
`;

export const SignUpView = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const SignUpText = styled.Text`
  font-size: ${wp(4)}px;
  font-weight: bold;
  color: #000;
`;

export const ButtonView = styled.TouchableOpacity`
  height: ${hp(8)}px;
  width: ${wp(50)}px;
  border-radius: ${hp(8)}px;
  background-color: #0387f7;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: ${hp(5)}px;
`;

export const ButtonText = styled.Text`
  font-size: ${wp(6)}px;
  color: #fff;
`;
