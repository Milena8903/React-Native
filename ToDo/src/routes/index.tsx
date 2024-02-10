import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TodoListScreen from "../views/TodoListScreen";
import HomeScreen from "../views/HomeScreen";
import LoginScreen from "../views/LoginScreen";

const Routes = () => {
    const Stack = createNativeStackNavigator();
//Estamos creando un componente de rutas q me regresa un 
//componente de navegacion, el cual contiene sus respectivas
//rutas,q hace q se mueva en ciertas pantallas
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TodoList"> 
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="TodoList" component={TodoListScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;