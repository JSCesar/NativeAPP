import React from 'react';

import { Container, PassosList, Passos, Opcoes,
         Botao, Botoes, Dados, Titulo, Descricao, Text } from '../CardapioTipo/styles';

import Opcao from '~/components/Opcao';
import Passo from '~/components/Passo';

export default function CardapioTipo( props ) {

    function proximoPasso( data ) {
        let cardapio = props.cardapio;
        cardapio.tipo = data;
        props.proximoPasso(cardapio);
    }

    function passoAnterior(data) {
        const tipo = { tipo: data };
        props.passoAnterior(tipo);
    }

    return (
        <Container>
            <PassosList>
                <Passos
                    data={[
                        { id: 1, ordem:1, title: "Tipo", descricao: "Escolha o Tipo de Cardápio", status:false }
                    
                    ]}
                    keyExtractor={item => String(item.id)}
                    renderItem={ ({ item }) => {
                        return(
                        <Passo data={ item }/>
                        )
                    }}
                />
             </PassosList>
            <Opcoes>
                <Dados>
                    <Titulo>O seu novo cardápio é igual todos os dias ou é variado?</Titulo>
                    <Titulo>{ props.cardapio.tipo }</Titulo>
                </Dados>
                <Botoes>
                    <Botao tipo="primary" onPress={() => { proximoPasso('Variado') }} >
                        <Text>Variado</Text>
                    </Botao>
                    <Botao tipo="secondary" onPress={() => { proximoPasso('Igual') }} >
                        <Text>Igual todos os dias</Text>
                    </Botao>
                </Botoes>
            </Opcoes>
        </Container>
    )
}