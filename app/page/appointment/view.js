import React from 'react';
import {View, Text} from 'react-native'

export default class Appointment extends React.PureComponent {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Appointment !</Text>
            </View>
        )
    }

}