import { FlatList, View, ScrollView } from "react-native";
import { CListItem } from "@/components/CustomListItem";
import { styles } from "@/constants/Styles";
import { useEffect, useState } from "react";
import { getData } from "@/hooks/getData";
import { create } from "zustand";
import { formatedData } from "@/hooks/dataFormat";

type Store = {
  conversionList: any[];
  setCurrencyRate: (list: any) => void;
}

//Zustand for Persistent State Management
const useStore = create<Store>((set) => ({
    conversionList:[],
    setCurrencyRate: (list:any) => set({ conversionList: list }),
}))


export default function Index(){

    //State for the Currency Conversion Rate
    const {conversionList, setCurrencyRate} = useStore();

    //Life Cycle Hooks
    useEffect(() => {
        getData().then(data => {
          
          //Set the Currency Conversion Rate data Format
          setCurrencyRate(formatedData(data.data));
          
        });
    }, []);

 

    return (
    <ScrollView>
        <View>
            <FlatList
            data={conversionList}
            renderItem={CListItem}
            keyExtractor={item => item.id}
            style={styles.list}
            />
        </View>
    </ScrollView>)

}