import React from 'react';

import { Container, Botao, Botoes, Dados, Titulo, Descricao, Text } from './styles';
import { StyleSheet } from 'react-native';

export default function Opcao() {
    
    
    return (
        <Container>
          
                <Dados>
                    <Titulo>O seu novo cardápio é igual todos os dias ou é variado?</Titulo>
                </Dados>
                <Botoes>
                    <Botao tipo="primary" onPress={() => {}} >
                        <Text>Variado</Text>
                    </Botao>
                    <Botao tipo="secondary" onPress={() => {}} >
                        <Text>Igual todos os dias</Text>
                    </Botao>
                </Botoes>
           
            
        </Container>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
      flex:1,
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
    }
  });