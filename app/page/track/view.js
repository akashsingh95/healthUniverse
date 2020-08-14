import React from 'react';
import {View, Text} from 'react-native'

export default class Track extends React.PureComponent {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Track !</Text>
            </View>
        )
    }

}