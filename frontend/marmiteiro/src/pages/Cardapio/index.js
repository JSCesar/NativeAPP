import React, { useState } from 'react';

import CardapioTipo from './components/CardapioTipo';
import CardapioDisponibilidade from './components/CardapioDisponibilidade';
import CardapioPedido from './components/CardapioPedido';
import CardapioPrato from './components/CardapioPratos'

export default function Cardapio() {
    
    const [ cardapio, setCardapio ] = useState({
        tipo: null,
        disponibilidade: new Date(),
        pedido: new Date(),
        pratos: null,
    });

    const [ passo, setPasso ] = useState(1);

    function proximoPasso( data ) {
        let value = passo;
        if (value < 4)
            value = value + 1;
        setPasso(value);
        setCardapio(data)
        console.tron.log(cardapio);
        
    }
    function passoAnterior( data ) {
        let value = passo;
        if ( value > 1 )
            value = value - 1;
        setPasso(value);
        console.tron.log(cardapio);
    }

    switch (passo) {
        case 1:
            return (<CardapioTipo proximoPasso={ proximoPasso } passoAnterior={ passoAnterior } cardapio={cardapio} />);
        case 2:
            return (<CardapioDisponibilidade proximoPasso={ proximoPasso } passoAnterior={ passoAnterior } cardapio={cardapio} />);
        case 3:
            return (<CardapioPedido proximoPasso={ proximoPasso } passoAnterior={ passoAnterior } cardapio={cardapio} />);
        case 4:
            return (<CardapioPrato proximoPasso={ proximoPasso } passoAnterior={ passoAnterior } cardapio={cardapio} />);
        default:
            return (<CardapioTipo proximoPasso={ proximoPasso } passoAnterior={ passoAnterior } cardapio={cardapio} />);  
    }

      
}