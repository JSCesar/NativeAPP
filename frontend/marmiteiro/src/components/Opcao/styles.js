import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

import {
    widthPercentageToDP as wp2dp,
    heightPercentageToDP as hp2dp,
  } from 'react-native-responsive-screen';

import * as gs from '~/assets/styles/app_style'; 


export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    padding: 5px;
    margin:5px;
    elevation: 2;
`;

export const Dados = styled.View`
    flex:4;
    align-content: center;
    justify-content:center;
`;

export const Titulo = styled.Text`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: ${gs.defaultFontColor};
`;
export const Descricao = styled.Text``;

export const Botoes = styled.View`
    flex:1;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    min-height: ${hp2dp(`10%`)}px;
`;

export const Botao = styled.TouchableOpacity`
    flex:1;
    margin: 10px;
    justify-content: center;
    align-items: center;
    max-height: 45%;
    min-height: 40%;
    font-size: 20px;
    background-color: ${ props => (props.tipo == "primary" ? gs.primaryColor : gs.secondaryColor ) }
    borderRadius: 15px;
`;

export const Text = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 15px;  
`;