import React from 'react';
import {View, Text, SafeAreaView,FlatList} from 'react-native'
import FileItem from '../../components/fileItem'


const data = [
    {id:1,name:"Shri Sai hospital",services:["surgery","cardiology","endology"],img:require('../../assets/hospital.jpg'),beds:10,distance:3.4},
    {id:2,name:"Paras Hospital",services:["surgery","cardiology"],img:require('../../assets/hospital1.jpg'),beds:34,distance:9.0},
    {id:3,name:"Ford Hospital",services:["surgery","endology"],img:require('../../assets/hospital2.jpg'),beds:45,distance:10.4},
    {id:4,name:"Psg Hospital",services:["surgery"],img:require('../../assets/hospital3.jpg'),beds:98,distance:45},
    {id:5,name:"Jagdish Memorial Hospital",services:["surgery","cardiology","endology"],img:require('../../assets/hospital4.jpg'),beds:17,distance:34}
    ]

export default class Home extends React.PureComponent {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
        data={data}
        renderItem={(item,index)=>
            <FileItem data={item}/>
        }
        keyExtractor={(item, index) => item + index}
        extraData={data.id}
      />
            </SafeAreaView>
        )
    }

}