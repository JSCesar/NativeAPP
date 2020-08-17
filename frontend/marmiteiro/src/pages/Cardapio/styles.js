import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    widthPercentageToDP as wp2dp,
    heightPercentageToDP as hp2dp,
  } from 'react-native-responsive-screen';

import * as gs from '~/assets/styles/app_style';


export const Container = styled.View`
    flex: 1;
    background-color: ${gs.backgroudColor};
`;

export const PassosList = styled.View`
    flex: 3;
    flex-direction: column;
    justify-content: space-between;
`;

export const Passos = styled.FlatList`
    flex: 1;
`;

export const PassoIcon = styled(Icon).attrs(props => ({
    color: gs.defaultFontColor,
    name: props.name,
    size: 30
}))`
    padding: 10px;
`;

export const Opcoes = styled.View`
    flex: 2;
    flex-direction: column;
    padding: 5px;
    margin:5px;
    elevation: 3;
    background-color: #fff;
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
    color: ${ gs.defaultFontColor };
    flex 1;
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
    background-color: ${ props => (props.color == null ? 'transparent' : props.color) };
    flex-direction: row;
    borderRadius: 10px;
`;

export const BotaoHora = styled(Botao).attrs(props => ({
    onPress: props.onPress,
}))`
    background-color: ${gs.secondaryColor};
    
`;

export const Text = styled.Text`
    color: ${ props => props.color == null ? gs.defaultFontColor : props.color };
    font-weight: bold;
    font-size: 15px; 
    text-align: center;
`;

export const BotaoIcon = styled(Icon).attrs( props => ({
    color: props.color,
    name: props.name,
    size: 25,
}))`
    padding: 10px;
`;