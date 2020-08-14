import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import AppointmentScreen from '../page/appointment/view';
import HomeScreen from '../page/home/view';
import MedicineScreen from '../page/medicine/view';
import TrackScreen from '../page/track/view';
import {Image , Text, View} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { navigationRef } from './NavigationService';

import Login from 'app/features/login/containers';
import Home from 'app/features/home/containers';

const Stack = createStackNavigator();

const homeOptions = {
  title: 'My home',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};


function LogoTitle(props) {
  return (
    <View>
    <Text style ={{fontWeight: 'bold'}}>HealthU</Text>
    {/* <Image
      style={{ width: 50, height: 50 }}
      source={require('./asset/logo.png')}
    /> */}
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen(props) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
       name="Home"
       component={HomeScreen}
       options={{ headerTitle: props => <LogoTitle {...props} /> }} />
    </HomeStack.Navigator>
  );
}

const MedicineStack = createStackNavigator();

function MedicineStackScreen() {
  return (
    <MedicineStack.Navigator>
      <MedicineStack.Screen name="Medicine" component={MedicineScreen} />
    </MedicineStack.Navigator>
  );
}


const TrackStack = createStackNavigator();

function TrackStackScreen() {
  return (
    <TrackStack.Navigator>
      <TrackStack.Screen name="Track" component={TrackScreen} />
    </TrackStack.Navigator>
  );
}


const AppointmentStack = createStackNavigator();

function AppointmentStackScreen() {
  return (
    <AppointmentStack.Navigator>
      <AppointmentStack.Screen name="Appointment" component={AppointmentScreen} />
    </AppointmentStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);

  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }} />
        <Tab.Screen name="Medicine" component={MedicineStackScreen}
          options={{
            tabBarLabel: 'Medicine',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="pill" color={color} size={size} />
            ),
          }} />
        <Tab.Screen name="Track" component={TrackStackScreen}
          options={{
            tabBarLabel: 'Track',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="radar" color={color} size={size} />
            ),
          }} />
        <Tab.Screen name="Appointment" component={AppointmentStackScreen}
          options={{
            tabBarLabel: 'Appointment',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="clipboard-list" color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>
      {/* <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen name="Home" component={Home} options={homeOptions} />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
            }}
          />
        )}
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
