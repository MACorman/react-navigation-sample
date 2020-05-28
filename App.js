import React from 'react';
import {
  Button,
  View
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Feed from './src/tabs/Feed'
import PostDetails from './src/stack/PostDetails'
import Login from './src/stack/Login'
import Profile from './src/tabs/Profile'
import Notifications from './src/tabs/Notifications'
import NewPost from './src/tabs/NewPost'
import EditProfile from './src/drawer/EditProfile'
import Settings from './src/drawer/Settings'


const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator()



class App extends React.Component {

  state = {
    loggedIn: false
  }

  login = () => {
    this.setState({loggedIn: true})
    
  }

  FeedScreen = ({navigation}) => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Feed' component={Feed} options={{headerLeft: null, headerRight: () => (
          <Button title='Logout' onPress={() => this.setState({loggedIn: false})}/>
        )}}/>
        <Stack.Screen name='Post Details' component={PostDetails} options={{headerRight: () => (
          <Button title='Logout' onPress={() => this.setState({loggedIn: false})}/>
        )}}/>
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
      <>
        {
            this.state.loggedIn
          ?
            <NavigationContainer>
              <Tabs.Navigator>
                <Tabs.Screen name='Feed' children={this.FeedScreen} />
                <Tabs.Screen name='Profile' children={this.ProfileScreen} />
                <Tabs.Screen name='Notifications' component={Notifications} />
                <Tabs.Screen name='New Post' component={NewPost} />
              </Tabs.Navigator>
            </NavigationContainer>
          :
          <View>
            <Login login={this.login}/>
          </View>
        }
      </>
    )
  }
}

export default App;
