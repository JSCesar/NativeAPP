import React, { useState } from 'react';
import { View } from 'react-native';

import { Container, PassosList, Passos, Opcoes,
    Botao, Botoes, Dados, Titulo, Descricao, Text, BotaoIcon, BotaoHora } from '../../styles';


import DateTimePicker from '@react-native-community/datetimepicker';

import Opcao from '~/components/Opcao';
import Passo from '~/components/Passo';

export default function CardapioPedido( props ) {
    
    const [date, setDate] = useState(props.cardapio.disponibilidade);

    function changeHour() {
        let datetime = date;
        datetime.setTime( datetime.getTime() + (1 * 60 * 1 * 1000) );
        console.tron.log(datetime);
        setDate(datetime);
    }

    return (
        <Container>
            <PassosList>
                <Passos
                    data={[
                        {id: 1, title: "Tipo", descricao: "Escolha o Tipo de Cardápio", icon:"check-circle"},
                        {id: 2, title: "Data da Entrega", descricao: "Escolher Data", icon:"check-circle" },
                        {id: 3, title: "Data e hora Limite do Pedido", descricao: "Escolher Data", icon:"question-circle" },
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
                    <Titulo>Prepare-se para a quantidade certa dos ingredientes e tenha tempo de ir comprar tudo... </Titulo>
                    <Titulo>Então, escolha a data e hora limite seus clientes fazerem os pedidos: </Titulo>
                    
                </Dados>

                <Titulo>{ date.toLocaleDateString('en-GB') }</Titulo>

                <Botoes>
                    <Botao onPress={changeHour} tipo="primary">
                        <BotaoIcon name="minus-circle" color="#fff"/>
                    </Botao>
                    <Botao onPress={() => {}} tipo="primary">
                        <Text>{ date.toTimeString().split(' ')[0] }</Text>
                    </Botao>
                    <Botao  tipo="primary">
                        <BotaoIcon name="plus-circle" color="#fff"/>
                    </Botao>
                </Botoes>
            </Opcoes>
        </Container>
    )
}