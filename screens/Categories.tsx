import { Button, KeyboardAvoidingView, Modal, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { ColorPicker, fromHsv} from 'react-native-color-picker'

import FA from '@expo/vector-icons/FontAwesome';
import { theme } from "../theme";
import { Category } from "../types/category";
import { CategoryRow } from "../components/CategoryRow";


export const Categories = () => {
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [selectedColor, setSelectedColor] = useState(theme.colors.primary);

    const [newName,setNewName] = useState('');
    const [categories,setCategories] = useState<Category[]>([{
        id:'1',
        color:theme.colors.primary,
        name:'Groceries'
    },
    {
        id:'2',
        color:theme.colors.border,
        name:'Clothes'
    }
    ]); 

    const onSelectColor = (hex:string) => {
        // do something with the selected color.
        setSelectedColor(hex);
    };

    const createCategory = () => {
        if(newName.length === 0 ){
            return;
        }
        setCategories([...categories,{
            id: Math.random().toString(),
            color: selectedColor,
            name:newName,
        }]);
        setNewName('');
        setSelectedColor(theme.colors.primary);
    }   
    return (
    <><KeyboardAvoidingView
            // behavior="relative" // or 'padding' or any other value like 'flex' for instance.
            keyboardVerticalOffset={0} // KeyboardAvoidingView for iOS env
            style={{
                margin: 16,
                flex: 1,
            }}>
            <View style={{
                flexDirection: 'column',
                borderRadius: 11,
                overflow: 'hidden',
                display: 'flex',
            }}>
                {categories.map(({id,color,name}) =>(
                    <CategoryRow key={id} color={color} name={name} />
                        
                ) )}
                {/* <ListItem
                    label='Categories'
                    detail={<ET
                        name="chevron-thin-right"
                        color='white'
                        style={{ opacity: 0.3 }}
                        size={20} />} /> */}

                {/* <ListItem
        label = 'Report a Bug'
        detail = {<ET name="chevron-thin-right" color='white' size = {20} />}
        onClick={ () => {} }
    /> */}

                {/* <ListItem
                    label='Clear History'
                    isDestructive
                    onClick={() => { } } /> */}

            </View>
            <View style={{ flex: 1 }} />
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                paddingVertical: 8,
            }}>
                {/* <Button color={theme.colors.background} onPress={() => {}} title="Color" accessibilityLabel="Learn more about this purple button" /> */}

                <TouchableOpacity onPress={() => setShowColorPicker(!showColorPicker)}>
                    <View
                        style={{
                            backgroundColor: selectedColor,
                            width: 32,
                            height: 32,
                            borderRadius: 16,
                            borderWidth: 3,
                            borderColor: 'white',
                            marginTop: '12%',
                        }} />
                </TouchableOpacity>

                <TextInput
                    placeholder="Category Name" placeholderTextColor='white'
                    onChange={(event) => setNewName(event.nativeEvent.text)}
                    value={newName}
                    style={{
                        color: 'white',
                        borderColor: theme.colors.border,
                        height: 40,
                        borderWidth: 1,
                        flex: 1,
                        borderRadius: 8,
                        paddingLeft: 8,
                        marginLeft: 16,
                    }} />
                <TouchableOpacity onPress={createCategory} style={{ padding: 8 }}>
                    <FA name="send" size={24} color={theme.colors.primary} />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>

        <Modal transparent={true} visible={showColorPicker} animationType='fade' onRequestClose={() => setShowColorPicker(false) } >
            <View style={{
                flex:1,
                display:'flex',
                justifyContent:'center',
                padding:24,
                alignItems: 'center',
                backgroundColor:'rgba(0,0,0,0.5)'
            }}>
                <View 
                style={{
                    width:'100%',
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:theme.colors.card,
                    overflow:'hidden',
                    borderRadius:12,
                }} >

                <ColorPicker
                hideSliders
                color={selectedColor}
                onColorChange={ (color) => onSelectColor(fromHsv(color)) }
                style={{height:300,width:'100%'}}
                // style={{height:'50%',width:'100%',padding:10}} 
                />
                    <Button title='Done' color={theme.colors.card} onPress={() => setShowColorPicker(false)} />
                </View>
            </View>
        </Modal></>



    );
}