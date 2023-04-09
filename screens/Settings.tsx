import React from 'react'
import { View } from "react-native"
import { ListItem } from "../components/ListItem";
import ET  from '@expo/vector-icons/Entypo';
import { theme } from "../theme";

export const Settings = () => (
    <View style ={{ 
        flexDirection:'column',
        margin : 16,
        borderRadius:11,
        overflow:'hidden'
    }}>

       <ListItem 
            label = 'Categories'
            detail = {
                <ET 
                name="chevron-thin-right" 
                color='white' 
                style={{opacity:0.3}}
                size = {20} 
                />
            }
            onClick={ () => {} }
        />

         {/* <ListItem 
            label = 'Report a Bug'
            detail = {<ET name="chevron-thin-right" color='white' size = {20} />}
            onClick={ () => {} }
        /> */}

        <ListItem 
            label = 'Clear History'
            isDestructive 
            onClick={ () => {} }
        />

    </View>
);