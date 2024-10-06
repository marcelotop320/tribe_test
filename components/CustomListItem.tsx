import React from "react";
import {View, Text, StyleSheet } from "react-native";
import { styles } from "@/constants/Styles";

export const CListItem = ({item}:{item:any}) => 
{
    return (
    <View style={[styles.item, styles.container]}>
        <View style={[styles.row, styles.spaceBetween, styles.overflow]}>
            <View>
                <Text style={styles.codeBar}>{item.currencyName}</Text>
            </View>
            <View>
                <View >
                    <Text>{item.countryName}</Text>
                </View>
                <View>
                    <Text>{item.conversionRate}</Text>
                </View>
                <View>
                    <Text>{item.updatedDate}</Text>
                </View>
            </View>
        </View>
    </View>)
}

