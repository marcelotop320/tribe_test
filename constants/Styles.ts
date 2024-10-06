import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    list:{
        padding:20,
    },
    item:{
        backgroundColor: '#f9c2ff',
        padding:20,
        marginVertical: 8,
        borderRadius:5
    },
    title:{
        fontSize:24
    },
    container:{
        display:'flex',
    },
    row:{
        flexDirection:'row',
    },
    column:{
        flexDirection:'column',
    },
    spaceBetween:{
        justifyContent:'space-between',
    },
    spaceAround:{
        justifyContent:'space-around',
    },
    center:{
        alignItems:'center'
    },
    codeBar:{
        fontSize:20,
        marginRight:10,
    },
    overflow:{
        overflow:'hidden',
    }
});