import { StatusBar } from 'expo-status-bar';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';
import Restaurantscreen from './screens/Restaurantscreen';
import { store } from './store'
import { Provider } from 'react-redux'
import CartScreen from './screens/CartScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import MainScreen from './screens/MainScreen';
import Login from './screens/Login';
import Register from './screens/Register';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <TailwindProvider>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Group screenOptions={{statusBarHidden:true}}>
      <Stack.Screen name="Home" component={Homescreen} />
      <Stack.Screen name="Restaurant" component={Restaurantscreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'fullScreenModal', headerShown: false, animation:"slide_from_bottom", statusBarTranslucent: false, statusBarHidden: false, statusBarColor:'#00CCBB'}}>
      <Stack.Screen name="Cart" component={CartScreen}/>
      <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen} />
      <Stack.Screen name="Delivery" component={DeliveryScreen} />
      </Stack.Group>
    </Stack.Navigator>
    </TailwindProvider>
    </NavigationContainer>
    </Provider>
  );
}
