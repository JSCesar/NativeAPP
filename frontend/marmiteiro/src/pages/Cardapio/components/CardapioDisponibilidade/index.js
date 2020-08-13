import React, { useState } from 'react';
import { View } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import { Container, PassosList, Passos, Opcoes,
    Botao, Botoes, Dados, Titulo, Descricao, Text, BotaoIcon } from '../../styles';
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
        setDate(currentDate);
        props.proximoPasso( { disponibilidade: currentDate } );
    };

    return (
        <Container>
            <PassosList>
                <Passos
                    data={[
                        {id: 1, title: "Tipo", descricao: "Escolha o Tipo de Cardápio", icon:"check-circle"},
                        {id: 2, title: "Data da Entrega", descricao: "Escolher Data", icon:"question-circle" }
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
                        <Text>{ date.toLocaleDateString('en-GB') }</Text>
                        <BotaoIcon name="calendar" />
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