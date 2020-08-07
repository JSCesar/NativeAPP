import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';


export const Container = styled(LinearGradient).attrs({
    colors: ['#FF7272', '#FFFF9E'],
    start: {x:0, y:0},
    end: {x:1, y:1}, 
})`
    flex: 1;
`;

export const Profile = styled.View`
    margin: 10px;
    flex-direction: row;
    align-self: flex-start
    flex:1
`;

export const ImageContainer = styled.View`
    flex: 1;
    flex-grow: 1;
`;

export const Image = styled.View`
  border-radius: 150px;
  background-color: #fff
  flex: 1
`;

export const Dados = styled.View`
    flex: 1
    flex-direction: column;
    flex-grow:2;
`;

export const Title = styled.Text`
    font-size: 25px;
    color: #fff
    font-weight: bold;
`;

export const ProgressBlock = styled.View`
    flex-direction: column;
    padding-top: 5px;
    flex: 5;
    align-items: center;
`;

export const ProgressBar = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

export const Description = styled.Text`
    margin: 5px;
    
    
    flex: 2;
`;

export const Stats = styled.View`
    margin-top: 2px;
    flex: 1;
    flex-direction: row;
    
    align-items: center;
    align-content: space-between;
    
`;

export const Stat = styled.View`
    flex-direction: row;
    align-items: center;
    flex: 1;
    padding: 5px;
`;
export const StatText = styled.Text`
    font-weight: bold;
`;
export const StatValue = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: #fff;
    padding: 5px;
`;

export const MenuList = styled.View`
    flex-direction: row;
    flex: 4;
    align-self: center;
    
`;

export const MenuLine = styled.View`
flex-direction: column;

flex: 1;
`;

export const MenuButton = styled.TouchableOpacity`
    
    align-items: center;
    justify-content: center;
    
    margin: 5px;
    flex:1;
`;

export const Text = styled.Text`
    color: #fff;
    font-weight: bold;
`;

export const Config = styled.View`
    flex:1
    flex-direction: row;
    align-items: flex-end;
`;

export const ConfigButton = styled.TouchableOpacity`
    flex:1;
    align-items: center;
    margin: 10px;
    
`;


export const ConfigText = styled.Text`
    color: #000;
    font-weight: bold;
`;