import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { Container, PassosList, Passos, Opcoes,
    Botao, Botoes, Titulo, Descricao, Text, BotaoIcon, BotaoHora } from '../../styles';

import { Dados, Grupo, TextHora } from './styles'


import DateTimePicker from '@react-native-community/datetimepicker';

import Opcao from '~/components/Opcao';
import Passo from '~/components/Passo';

export default function CardapioPedido( props ) {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [hora, setHora] = useState(0);
    const [minutos, setMinutos] = useState(0);

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    
    const showDatepicker = () => {
        showMode('date');
    };

    function onChange(event, selectedDate) {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        //currentDate.setHours(0, 0, 0, 0);
        setDate(currentDate);
        proximoPasso( currentDate );
    };

    function changeHour(event, hh) {
    
        let horas = 0;
        if (hh > 0) {
            horas = (hora + hh) <= 23 && (hora + hh) >= 0 ? hora + hh : 0;
        } else {
            horas = (hora + hh) <= 23 && (hora + hh) >= 0 ? hora + hh : 23;
        }
        setHora(horas);
        //proximoPasso( datetime );
    }

    function proximoPasso() {
        let datetime = date;
        datetime.setHours(hora, minutos, minutos, minutos);
        const cardapio = props.cardapio;
        cardapio.pedido = datetime;
        //console.tron.log(cardapio);
        props.proximoPasso(cardapio);
    }

    return (
        <Container>
            <PassosList>
                <Passos
                    data={[
                        {id: 1, title: "Tipo", descricao: `Cardápio: ${ props.cardapio.tipo }`, status:true },
                        {id: 2, title: "Data da Entrega", descricao: `${ props.cardapio.disponibilidade.toLocaleDateString() }`, status:true },
                        {id: 3, title: "Data e hora Limite do Pedido", descricao: "Escolher Data", status:false },
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
                
                <Grupo>
                    <Botao onPress={ showDatepicker }>
                        <TextHora>{ date.toLocaleDateString() }</TextHora>
                        <BotaoIcon name="calendar" />
                    </Botao>
                    
                    <Botoes>
                        <Botao onPress={ (event) => { changeHour(event, -1) } } color="#007bff" >
                            <BotaoIcon name="minus-circle" color="#fff"/>
                        </Botao>

                        <Botao onPress={() => { proximoPasso() }}>
                            <Text> { String(hora).padStart(2, '0') } : { String(minutos).padStart(2, '0') }</Text>    
                        </Botao> 

                        <Botao onPress={ (event) => { changeHour(event, 1) } } color="#007bff" >
                            <BotaoIcon name="plus-circle" color="#fff"/>
                        </Botao>
                    </Botoes>
                </Grupo>
            </Opcoes>
            <View>    
                {show && <DateTimePicker
                    testID="dateTimePicker"
                    value={ date }
                    mode={ mode }
                    is24Hour={ true }
                    display="default"
                    onChange={onChange} />
                }   
            </View>
        </Container>
    )
}