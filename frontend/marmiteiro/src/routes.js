import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '~/pages/Main';
import Cardapio from '~/pages/Cardapio';

const Routes = createAppContainer(createStackNavigator(
    {   
        
        Main: {
            screen: Main,
            navigationOptions : {
                title: "Home",
                headerShown: false,
                
            }
        },
        Cardapio: {
            screen: Cardapio,
            navigationOptions: {
                title: "Novo Cardapio",
                headerTintColor: '#000',
                headerStyle: {
                    backgroundColor: '#EAEAEA',
                },
                
            }
        }
    }));

export default Routes;
