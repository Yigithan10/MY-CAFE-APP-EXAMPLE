import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './src/redux';
import Home from './src/screens/Home';
import Events from './src/screens/Events';
import Menus from './src/screens/Menus';
import Drinks from './src/screens/Drinks';
import Eats from './src/screens/Eats';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Splash from './src/screens/Splash';
import Settings from './src/screens/Settings';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Store = configureStore({ reducer: reducers });

  return (
    <Provider store={Store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Splash">
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Events' component={Events} />
            <Stack.Screen name='Menus' component={Menus} />
            <Stack.Screen name='Drinks' component={Drinks} />
            <Stack.Screen name='Eats' component={Eats} />
            <Stack.Screen name='About' component={About} />
            <Stack.Screen name='Contact' component={Contact} />
            <Stack.Screen name='Settings' component={Settings} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;