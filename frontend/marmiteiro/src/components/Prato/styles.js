import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    padding: 5px;
    margin: 5px;  
    height: 80px;
`;

export const PratoImage = styled.View`
    flex: 1;
    background-color: #cccccc;
`;

export const PratoBlock = styled.View`
    flex: 3;
    padding: 5px;
`;

export const PratoDados = styled.View`
    flex: 1;
    flex-direction: row;
    align-items:center;
    align-content: center;
    justify-content: space-between;
`;

export const PratoTitle = styled.Text`
    flex: 1;
    color: #000;
    font-weight: bold;
    font-size: 18px;
`;

export const Text = styled.Text`
    flex: 1;
    color: #000;
    font-weight: bold;
    font-size: 15px;
`;

export const Image = styled.Image.attrs(props => ({
    source: props.source
}))`
    flex: 1;
    width: 100%;
    height: 100%;
`;

export const Valor = styled.View`
    flex: 4;
    flex-direction: row;
`;