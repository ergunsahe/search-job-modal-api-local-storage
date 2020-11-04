import React from "react";
import {TouchableOpacity, Text } from "react-native"



import {jobItem} from "../styles"

const JobItem = (props) =>{
    return(
        <TouchableOpacity 
            style={[jobItem.container, ]}
            onPress={props.onSelect}
            onLongPress={props.onSelectJob}
        >
            <Text style={jobItem.textHeader}>{props.job.title} </Text>
            <Text style={jobItem.text}>{props.job.location} </Text>
        </TouchableOpacity>
    )
}


export {JobItem}