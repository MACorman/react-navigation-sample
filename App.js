import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Feed from './src/tabs/Feed'
import PostDetails from './src/stack/PostDetails'
import Profile from './src/tabs/Profile'
import Notifications from './src/tabs/Notifications'
import NewPost from './src/tabs/NewPost'
import EditProfile from './src/drawer/EditProfile'
import Settings from './src/drawer/Settings'


const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator()



class App extends React.Component {
  FeedScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Feed' component={Feed} />
        <Stack.Screen name='Post Details' component={PostDetails} />
      </Stack.Navigator>
    )
  }

  ProfileScreen = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name='Profile' component={Profile} />
        <Drawer.Screen name='Edit Profile' component={EditProfile} />
        <Drawer.Screen name='Settings' component={Settings} />
      </Drawer.Navigator>
    )
  }

  render() {
    return (
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen name='Feed' children={this.FeedScreen} />
          <Tabs.Screen name='Profile' children={this.ProfileScreen} />
          <Tabs.Screen name='Notifications' component={Notifications} />
          <Tabs.Screen name='New Post' component={NewPost} />
        </Tabs.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;
