import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {View, Text, FlatList, ActivityIndicator} from "react-native"

import {JobItem} from "../components"

import {savedJob, activity} from "../styles"

const SavedJobs=(props)=>{
    const[isLoading, setLoading]=React.useState(false)
    const [savedList, setSavedList]=React.useState([])

    function fetchList(){
        AsyncStorage.getItem("@SAVED_JOB")
        .then(response => {
            setSavedList(JSON.parse(response))
            setLoading(false)
        } 
        )
        
    }

    React.useEffect(() =>{
        fetchList()
        setLoading(true)
    }, [])

    const deletedJob= async (text) =>{
        
        
        const newList = [...savedList]
        const deletedTitle=text.toLowerCase()
        const jobIndex= savedList.findIndex((job) =>{
            const selectedTitle=job.title
            return selectedTitle.toLowerCase()===deletedTitle ? savedList.indexOf(selectedTitle) :null
        })
        newList.splice(jobIndex, 1)
        await AsyncStorage.setItem("@SAVED_JOB", JSON.stringify(newList))
        setSavedList(newList)
        
    }
    const renderList=({item}) =>{
        return <JobItem job={item} onSelectJob={() =>deletedJob(item.title)}/>
    }
    return(
        <View>
            <Text style={savedJob.header}>SAVED JOBS</Text>

            {
                isLoading ? 
                
                <View style={activity.container}>
                    <ActivityIndicator size={"large"} color="red"/>
                </View>
                :
                <FlatList
                    keyExtractor={(item, index) =>index.toString()}
                    data={savedList}
                    renderItem={renderList}
                    ListEmptyComponent={() => <Text style={{alignSelf:"center", fontSize:20, color:"#dd4470"}} >Nothing is saved...</Text>}
                />
            }
        </View>
    )
}

export {SavedJobs}