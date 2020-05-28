import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    Button
  } from 'react-native';

function Feed(props) {
    return (
        <SafeAreaView>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 350 }} >
                <Text>Feed</Text>
                <Button
                    title="Go to Post Details"
                    onPress={() => props.navigation.navigate('Post Details')}
                />
            </View>
        </SafeAreaView>
    )
}

export default Feed