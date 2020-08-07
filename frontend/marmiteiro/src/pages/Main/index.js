import React from 'react';

import {
  Container,
  Profile,
  MenuList,
  ImageContainer,
  Image,
  Dados,
  Title,
  ProgressBar,
  Description,
  Stats,
  Stat,
  StatText,
  MenuLine,
  MenuButton,
  Config,
  ConfigButton,
  Text,
  StatValue,
  ProgressBlock,
  ConfigText
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/EvilIcons';

import * as Progress from 'react-native-progress';

export default function Main() {
  return (
    <Container>
      <Profile>
        <ImageContainer>
          <Image>
            <Icon name="face" size={125} color="#333"></Icon>
          </Image>
        </ImageContainer>
        <Dados>
          <Title>Olá Marilene!</Title>
          <ProgressBlock>
            <ProgressBar>
              <Progress.Bar progress={0.75} height={25} ></Progress.Bar>
              <Icon name="grade" size={30} color="#fff200"></Icon>
            </ProgressBar>
            <Description>Maioria dos Pedidos Entregues. Falta Pouco!</Description>
          </ProgressBlock>
          <Stats>
            <Stat>
              <StatValue>39</StatValue>
              <StatText>Vendas</StatText>
            </Stat>
            <Stat>
              <StatText>R$</StatText>
              <StatValue>500,00</StatValue>
            </Stat>
          </Stats>
        </Dados>
      </Profile>

      <MenuList>
        <MenuLine>
          <MenuButton onPress={()=> {}}>
            <Icon name="restaurant" size={100} color="#fff"></Icon>
            <Text>Preparar</Text>
          </MenuButton>
          <MenuButton onPress={()=> {}}>
            <Icon name="room-service" size={100} color="#fff"></Icon>
            <Text>Cardapio</Text>
          </MenuButton>
        </MenuLine>
        <MenuLine>
          <MenuButton onPress={()=> {}}>
            <Icon name="transfer-within-a-station" size={100} color="#fff"></Icon>
            <Text>Entregar</Text>
          </MenuButton>
          <MenuButton onPress={()=> {}}>
            <Icon name="monetization-on" size={100} color="#fff"></Icon>
            <Text>Vendas</Text>
          </MenuButton>
        </MenuLine>
        
      </MenuList>
      <Config>
      <ConfigButton onPress={()=> {}}>
     
      </ConfigButton>
      <ConfigButton onPress={()=> {}}>
      
      </ConfigButton>
      <ConfigButton onPress={()=> {}}>
      <Icon2 name="gear" size={50} color="#333"></Icon2>
      <ConfigText>Configurações</ConfigText>
      </ConfigButton>
      </Config>

    </Container>
  );
}
