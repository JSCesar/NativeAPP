import styled from 'styled-components';

import * as gs from '~/assets/styles/app_style';

import Icon from 'react-native-vector-icons/FontAwesome';


export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    padding: 5px;
    margin: 5px;
    align-items: flex-end;
`;

export const Dados = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
    flex: 1;
    color: #000;
    font-size:20px;
`;

export const Descricao = styled.Text`
    flex: 1;
    color: #000;
    font-size: 15px;
`;

export const PassosIcon = styled(Icon).attrs(props => ({
    color: gs.defaultFontColor,
    name: props.icon,
    size: 30,
    
}))`
    padding-right: 10px;
`;