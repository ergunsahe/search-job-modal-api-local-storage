import React, {useState, useEffect} from "react";
import {View, Text, FlatList, Button, ActivityIndicator, TouchableOpacity} from "react-native"
import axios from "axios"
import Modal from "react-native-modal"

import DOMParser from 'react-native-html-parser';

import {JobItem} from "../components"
import AsyncStorage from "@react-native-async-storage/async-storage";

import {job, activity, modal} from "../styles"

const Jobs= (props) =>{
    const[isLoading, setLoading]=useState(false)
    const [data, setData]= useState([])
    const [modalFlag, setModalFlag] = useState(false)
    const [selectedJob, setSelectedJob] =useState("")
    const {selectedLanguage} = props.route.params

    const fetchData= async () =>{
        const response= await axios.get(`https://jobs.github.com/positions.json?search=${selectedLanguage.toLowerCase()}`)
        setData(response.data)
        setLoading(false)
    }
    useEffect(() =>{
        fetchData()
        setLoading(true)
    }, [])
     
    const onJobSelect=(job) =>{
        setModalFlag(true)
        setSelectedJob(job)
    }
    const renderJobs=({item}) =>{
          
        return <JobItem onSelect={() =>onJobSelect(item)} job={item}/>
    }

    const onJobSave= async () =>{
        let savedJobList = await AsyncStorage.getItem("@SAVED_JOB")
        savedJobList= savedJobList== null ? [] : JSON.parse(savedJobList)
        let updatedJobList= [...savedJobList, selectedJob]
        
        savedJobList.map((t) =>{
            if (t.id===selectedJob.id ){
                alert("You have already saved this job")
                updatedJobList.pop()
                
            }
        })
        await AsyncStorage.setItem("@SAVED_JOB", JSON.stringify(updatedJobList))
       
        
       
    }

    

    return(
        <View style={{flex:1}}>
            
            <Text style={job.header}>JOBS FOR: {selectedLanguage.toUpperCase()}</Text>
            {
                isLoading ?
                <View style={activity.container}>
                    <ActivityIndicator size={"large"} color="red"/>
                </View>
                :
                <FlatList
                    keyExtractor={(item, index) =>item.id.toString()}
                    data={data}
                    renderItem={renderJobs}
                
                />
            }

            <Modal isVisible={modalFlag} onBackdropPress={() =>setModalFlag(false)} >
                <View style={modal.container}>
                    <View>
                        <Text style={modal.texthead}>{selectedJob.title} </Text>
                        <Text style={modal.text}>{selectedJob.location} /  {selectedJob.company} </Text>
                    </View>
                    
                    <Text style={modal.desc} numberOfLines={5}>{selectedJob.description} </Text>
                    <View style={modal.btn}>
                        <Button title="Save" onPress={onJobSave}/>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity style={modal.saved} onPress={() =>props.navigation.navigate("SavedJobs")}>
                <Text style={modal.savedtext}>Go Saved Jobs</Text>
            </TouchableOpacity>
        </View>
    )
}

export {Jobs}