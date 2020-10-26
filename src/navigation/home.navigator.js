import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import { Icon } from '@ui-kitten/components';
import { Home } from '../scenes/dashboards/home.component';
import { Favorite } from '../scenes/dashboards/favorite.component';
import { Notifications } from '../scenes/dashboards/notifications.component'
const { Navigator, Screen } = createBottomTabNavigator();


const selectedColor = '#e65b6f';
const unselectedColor = '#000';


const NotificationsScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>Notification</Text>
  </Layout>
);
const AccountScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>Account</Text>
  </Layout>
);
function BottomTabBar({ navigation, state }){
  const HomeIcon = (props) => (<Icon {...props} name='home' fill={state.index == 0 ? selectedColor : unselectedColor} />);
  const LoveIcon = (props) => (<Icon {...props} name='heart' fill={state.index == 1 ? selectedColor: unselectedColor} />); 
  const BellIcon = (props) => (<Icon {...props} name='bell' fill={state.index == 2 ? selectedColor : unselectedColor} />);
  const PersonIcon = (props) => (<Icon {...props} name='person' fill={state.index == 3 ? selectedColor : unselectedColor} />); 
  
  return( 
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}
    indicatorStyle={{backgroundColor: selectedColor, height: 3}}
    style={styles.bottomNavigation}
    >
    <BottomNavigationTab title='Trang chủ' icon={HomeIcon} />
    <BottomNavigationTab title='Yêu thích' icon={LoveIcon}/>
    <BottomNavigationTab title='Thông báo' icon={BellIcon}/>
    <BottomNavigationTab title='Tài khoản' icon={PersonIcon}/>
  </BottomNavigation>
  );
}

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />} >
    <Screen name='Home' component={Home}/>
    <Screen name='Favorite' component={Favorite}/>
    <Screen name='Notifications' component={Notifications}/>
    <Screen name='Account' component={AccountScreen}/>
  </Navigator>
);

export const HomeNavigator = () => ( 
    <TabNavigator/>
);

const styles = StyleSheet.create({
  bottomNavigation:{
    paddingBottom:5,
    
  }
})