import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ProductProps} from '../types';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Favorite from '../pages/Favorite';
import Product from '../pages/Product';
import Signup from '../pages/Profile/Signup';

export type RootTabParamList = {
  Home: undefined;
  Profile: undefined;
  Favorite: undefined;
  Product: ProductProps;
  Signup: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#34495e',
          tabBarInactiveTintColor: '#7f8c8d',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={({route}) => ({
            title: 'Ana Sayfa',
            headerTitle: 'SAU Alışveriş Uygulaması',
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon name="home" size={25} color={color} />
            ),
          })}
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={({route}) => ({
            title: 'Favoriler',
            tabBarIcon: ({color}) => (
              <Icon name="heart" size={25} color={color} />
            ),
          })}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={({route}) => ({
            title: 'Profil',
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon name="user" size={25} color={color} />
            ),
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator<RootTabParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'SAU Alışveriş Uygulaması',
        }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({route}) => ({
          title: route.params.name,
          headerTitle: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: 'Profil',
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerTitle: 'Kayıt Ol',
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
