import React from 'react';
import {View, Text, SafeAreaView,FlatList} from 'react-native'
import FileItem from '../../components/fileItem'


const data = [
    {id:1,name:"Shri Sai hospital",services:["surgery","cardiology","endology"]},
    {id:2,name:"Paras Hospital",services:["surgery","cardiology","endology"]},
    {id:3,name:"Ford Hospital",services:["surgery","cardiology","endology"]},
    {id:4,name:"Sahyog Hospital",services:["surgery","cardiology","endology"]},
    {id:5,name:"Jagdish Memorial Hospital",services:["surgery","cardiology","endology"]}
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