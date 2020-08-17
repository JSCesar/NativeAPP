import React from 'react';

import { Container, PratoDados, PratoBlock, PratoImage, PratoTitle, Text, Image, Valor } from './styles';

export default function Prato( { prato, novo } ){

    return (
        <Container>
            <PratoImage>
                <Image source={ prato.imagem != null ? prato.imagem: require('~/assets/images/blankPhoto.png') }/>
            </PratoImage>
            <PratoBlock>
                <PratoTitle>{ prato.nome == null ? 'Clique abaixo para editar' : prato.nome}</PratoTitle>
                <PratoDados>
                    <Text>{ prato.peso != null ? prato.peso : 'Peso' }</Text>
                    
                    <Text>{ prato.valor != null ? prato.valor : 'Valor' }</Text>
                   
                    <Text>{ prato.quantidade != null ? 'max ' + prato.quantidade: 'Qtd' }</Text>
                </PratoDados>
            </PratoBlock>
        </Container>
    );
}