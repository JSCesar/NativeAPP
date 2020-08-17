import React from 'react';

import Passo from '~/components/Passo';
import Prato from '~/components/Prato';
import { Container, Passos, Text, BotaoIcon, Dados } from '../../styles';
import { Info, Opcoes, PassosList, PratoPropsList, PratoProp, PratosList, Pratos, Titulo, Botao, BotaoI, Bonitao } from './styles';
export default function CardapioPratos( props ) {

    const pedido = props.cardapio.pedido;
    const disponibilidade = props.cardapio.disponibilidade;
    const passosData = [
        {id: 1, ordem:1, title: "Tipo", descricao: `Cardápio: ${ props.cardapio.tipo }`, status:true },
        {id: 2, ordem:2, title: "Data da Entrega", descricao: `${ disponibilidade.toLocaleDateString() }`, status:true },
        {id: 3, ordem:3, title: "Data e hora Limite do Pedido", descricao: `${pedido.toLocaleDateString() } às ${ String(pedido.getHours()).padStart(2, '0') }:${ String(pedido.getMinutes()).padStart(2, '0') }`, status:true },
        {id: 4, ordem:4, title: "Definir Pratos Dispoíveis", descricao: "Escolher Pratos", status:false }
    ];
    const pratosData = [
        { id: 1, imagem: require('~/assets/images/arroz_carreteiro.jpg') , nome:'Arroz Carreteiro', peso: '150g', valor: 'R$ 15,00', quantidade:20  },
        { id: 2, imagem: require('~/assets/images/bife-a-cavalo.jpeg') , nome:'Bife à Cavalo', peso: '350g', valor: 'R$ 15,00', quantidade:20  },
        { id: 3, imagem: require('~/assets/images/file_frango.jpg') , nome:'Filé de Frango', peso: '300g', valor: 'R$ 15,00', quantidade:20  },
        { id: 4, imagem: require('~/assets/images/frangoFrito.jpg') , nome: 'Frango Frito', peso: '300g', valor: 'R$ 15,00', quantidade:20  },
        { id: 5, imagem: require('~/assets/images/pudim.jpg') , nome:'Pudim', peso: '100g', valor: 'R$ 15,00', quantidade:20  }
    ];


    return (
        <Container>
            <PassosList>
                <Passos
                    data={passosData}
                    keyExtractor={item => String(item.id)}
                    renderItem={ ({ item }) => {
                        return(
                            <Passo data={ item }/>
                        )
                    }}
                    initialScrollIndex={ passosData.length - 1 }
                />
             </PassosList>
            <Opcoes>
               <Prato prato={ { id: 1, imagem: null , nome:null, peso: null, valor: null, quantidade:null  } }></Prato>
               <PratoPropsList>
                   <PratoProp>
                        <Botao onPress={ () => {} } color="#007bff" >
                            <Text color="#fff">Nome</Text>
                        </Botao>
                        <Botao onPress={ () => {} } color="#007bff">
                            <Text color="#fff">Preço</Text>
                        </Botao>
                        <Botao onPress={ () => {} } color="#007bff">
                            <Text color="#fff">Peso</Text>
                        </Botao>
                        <Botao onPress={ () => {} } color="#007bff">
                            <Text color="#fff">Qtd. máxima</Text>
                        </Botao>
                        <Botao onPress={ () => {} } color="#27a243">
                            <Text color="#fff">Usar existente</Text>
                        </Botao>
                   </PratoProp>
               </PratoPropsList>
               <Info>
                    <Titulo>Você pode utilizar um prato ou porção já cadastrado</Titulo>
                    <BotaoI onPress={ () => {  } }>
                        <BotaoIcon name="upload" color="#27a243"/>
                        <Text>Usar</Text>
                    </BotaoI>
                    
               </Info>
               <PratosList>
                   <Pratos
                        keyExtractor={ item => String(item.id) } 
                        data={pratosData}
                        renderItem={ ({ item }) => {
                            return( <Prato prato={ item } /> )
                        } }
                   />
               </PratosList>
            </Opcoes>
           
        </Container>
    );
}