import React from 'react';
import { Card, AirbnbRating, Rating } from 'react-native-elements'
import { View } from 'react-native'
import { Text, Button, Icon } from 'react-native'

class FileItem extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    hospitalService(data) {
        console.log(data)
        return (
            <View style={{flexDirection:"row",paddign:10}}>{
                data.map(v =>
                    <View style={{ }}>
                        <Text>{v}  </Text>
                    </View>
                )
            }
            </View>
        )
    }

    render() {
        return (

            <Card containerStyle={{ margin: 10, height: 280, width: 390  }}
                title={this.props.data.item.name}
                image={require('../../assets/hospital.jpg')}>
                {this.props.data.item.services ? this.hospitalService(this.props.data.item.services) : null}

                <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={{ color: "#79b18c" }}>20 Beds</Text>
                    <Text>2.4 km</Text>
                    <Rating imageSize={20} readonly startingValue={2} />
                </View>
            </Card>
        )
    }

}

export default FileItem