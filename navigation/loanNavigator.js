
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LogIn from '../screens/Authorize/Login';
import SignUp from '../screens/Authorize/SignUp';
import MainScreen from '../screens/screens/MainScreen';


const AuthNavigator = createStackNavigator({
    LogIn: LogIn,
    SignUp: SignUp,
    MainScreen: MainScreen
});


export default createAppContainer(AuthNavigator);