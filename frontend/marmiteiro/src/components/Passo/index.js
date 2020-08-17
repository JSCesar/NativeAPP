import React, { useState } from 'react';


import { Container, Dados , Title, Descricao, PassosIcon} from './styles';


export default function Passo({  data  }) {

    return (
        <Container>
            <PassosIcon name={ data.name } status={ data.status }  ></PassosIcon>
            <Dados>
                <Title>{ data.title }</Title>
                <Descricao>{ data.descricao }</Descricao>
            </Dados>
        </Container>
    )
}
