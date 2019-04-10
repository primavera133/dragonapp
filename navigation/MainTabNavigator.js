import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import LanguagesScreen from '../screens/LanguagesScreen'
import LinksScreen from '../screens/LinksScreen'
import SpeciesListScreen from '../screens/SpeciesListScreen'
import SpecieDetailsScreen from '../screens/SpecieDetailsScreen'
import ImageScreen from '../screens/ImageScreen'
import SettingsScreen from '../screens/SettingsScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
}

const LinksStack = createStackNavigator({
  Links: LinksScreen
})

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  )
}

const SpeciesListStack = createStackNavigator({
  List: SpeciesListScreen,
  Details: SpecieDetailsScreen,
  Image: ImageScreen
}, { initialRouteName: 'List' })

SpeciesListStack.navigationOptions = {
  tabBarLabel: 'Species',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
    />
  )
}

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Languages: LanguagesScreen
})

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  )
}

export default createBottomTabNavigator({
/*  HomeStack,*/
  SpeciesListStack,
  LinksStack,
  SettingsStack
})
