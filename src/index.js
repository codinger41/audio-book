import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import Home from './screens/home'
import Book from './screens/book'


export default createAppContainer(createStackNavigator({
  Home: { screen: Home },
  Book: { screen: Book }
}, {
  headerMode: 'none'
}));
