import styled from 'styled-components';
import * as gs from '~/assets/styles/app_style';

export const Info = styled.View`
    flex:1;
    flex-direction: row;
    padding: 10px;
`;

export const PassosList = styled.View`
    flex: 1;
`;

export const Opcoes = styled.View`
    flex: 5;
    justify-content: space-between;
    background-color: #daf4f4;
`;

export const PratosList = styled.View`
    flex: 4;
    background-color: transparent;
    flex-direction: column;
    justify-content: space-between;
`;

export const PratoPropsList = styled.View`
    flex : 1;
    background-color: transparent;
    flex-direction: row;
`;

export const PratoProp = styled.View`
    flex: 4;
    flex-direction: row;
`;

export const Pratos = styled.FlatList`
    flex: 1;
    padding: 5px;
    margin: 5px;
    elevation: 1;  
    background-color: #fff;
    
`;

export const Titulo = styled.Text`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: ${ gs.defaultFontColor };
    flex: 4;
`;

export const BotaoI = styled.TouchableOpacity`
    flex:1;
    margin: 10px;
    justify-content: center;
    align-items: center;
    max-height: 45%;
    min-height: 40%;
    font-size: 20px;
    background-color: ${ props => (props.color == null ? 'transparent' : props.color) };
    flex-direction: column;
    borderRadius: 10px;
`;

export const Botao = styled.TouchableOpacity`
    flex:1;
    margin: 5px;
    justify-content: center;
    align-items: center;
    max-height: 75%;
    min-height: 40%;
    font-size: 20px;
    background-color: ${ props => (props.color == null ? 'transparent' : props.color) };
    flex-direction: row;
    borderRadius: 10px;
`;

