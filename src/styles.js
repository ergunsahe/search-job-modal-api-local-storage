import {StyleSheet, Dimensions} from "react-native"

export const topicItem=StyleSheet.create({
    container:{
        padding:12,
        margin:7,
        borderRadius:6
    },
    text:{
        fontWeight:"bold",
        fontSize:16
    }
})

export const introduction=StyleSheet.create({
    banner:{
        height:Dimensions.get("window").height / 3,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:25,
        fontWeight:"bold"
    }
})

export const job=StyleSheet.create({
    header:{
        fontSize:25,
        margin:10,
        alignSelf:"center",
        fontWeight:"bold",
        color:"#c1b9ae"
        
    }
})

export const jobItem=StyleSheet.create({
    container:{
        padding:5,
        margin:10,
        borderWidth:1,
        borderColor:"#4f8fc0",
        borderRadius:8
    },
    text:{
        fontSize:18,
        color:"#4f8fc0"
        
    },
    textHeader:{
        fontSize:20,
        fontWeight:"700",
        color:"#26648e"
    }
})

export const activity=StyleSheet.create({
    container:{
        flex:1,
        marginTop:Dimensions.get("window").height / 2
    }
})

export const modal=StyleSheet.create({
    container:{
        backgroundColor:"white",
        borderRadius:8
    },
    btn:{
        marginVertical:10,
        marginHorizontal:70
    },
    texthead:{
      padding:5,
      margin:5,
      fontSize:17  
    },
    text:{
        padding:5,
        margin:5,
        fontSize:15
    },
    desc:{
        margin:5,
        fontSize:16
    },
    saved:{
        padding:10,
        borderRadius:10,
        backgroundColor:"#53d2dc",
        position:"absolute",
        bottom:10,
        right:10
    },
    savedtext:{
        color:"white",
        fontWeight:"bold",
        fontSize:15
    }
})

export const savedJob=StyleSheet.create({
    header:{
        alignSelf:"center",
        fontSize:25,
        fontWeight:"700",
        padding:10,
        color:"#5193b3"
    },
    empty:{
        padding:10,
        margin:10,
        fontSize:18
    }
})