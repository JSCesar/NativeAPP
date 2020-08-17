import React, { useState } from 'react';
import { View } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import { Container, PassosList, Passos, Opcoes,
    Botao, Botoes, Dados, Titulo, Descricao, Text, BotaoIcon } from '../../styles';
import { TextHora } from './styles';

import Opcao from '~/components/Opcao';
import Passo from '~/components/Passo';

export default function CardapioDisponibilidade( props ) {

    const [date, setDate] = useState(props.cardapio.disponibilidade);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        currentDate.setHours(0, 0, 0, 0);
        //setDate(currentDate);
        //console.tron.log(currentDate);
        proximoPasso( currentDate );
    };

    function proximoPasso( data ) {
        let cardapio = props.cardapio;
        cardapio.disponibilidade = data;
        props.proximoPasso( cardapio );
    }

    return (
        <Container>
            <PassosList>
                <Passos
                    data={[
                        {id: 1, ordem:1, title: "Tipo", descricao: `Cardápio: ${props.cardapio.tipo}`, status:true },
                        {id: 2, ordem:2, title: "Data da Entrega", descricao: "Escolher Data", status:false  }
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
                    <Titulo>Escolha a data que esse cardápio será entregue para seus clientes: </Titulo>
                </Dados>
                <Botoes>
                    <Botao onPress={showDatepicker} tipo="primary">
                        <TextHora>{ date.toLocaleDateString('en-GB') }</TextHora>
                        <BotaoIcon name="calendar" size={30} />
                    </Botao>
                <View>
                    
                {show && <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange} />
                }   
                </View>
                </Botoes>
            </Opcoes>
        </Container>
    )
}