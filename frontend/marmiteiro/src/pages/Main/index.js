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
  ConfigText,
  ProgressBlock,
  ButtonIcon
  
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/EvilIcons';

import * as Progress from 'react-native-progress';

export default function Main( { navigation } ) {
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
              <Icon name="favorite" size={30} color="#f13737"></Icon>
            </ProgressBar>
            <Description>Maioria dos pedidos entregues. Falta pouco!</Description>
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
            <ButtonIcon  name="restaurant"/>
            <Text>Preparar</Text>
          </MenuButton>
          <MenuButton onPress={()=> { navigation.navigate('Cardapio') }}>
            <ButtonIcon  name="room-service"/>
            <Text>Cardapio</Text>
          </MenuButton>
        </MenuLine>
        <MenuLine>
          <MenuButton onPress={()=> {}}>
            <ButtonIcon  name="transfer-within-a-station"/>
            <Text>Entregar</Text>
          </MenuButton>
          <MenuButton onPress={()=> {}}>
            <ButtonIcon  name="monetization-on"/>
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
