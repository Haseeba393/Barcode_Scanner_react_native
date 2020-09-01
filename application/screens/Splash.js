import React, {useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator
} from 'react-native';

function Splash({navigation}){

    //by default after 2 seconds user will be redirected to scan screen
    useEffect(()=>{
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'scan' }],
            });
        }, 2000);
    },[]);

    return(
        <View style={Styles._mainContainer}>
            <Text style={Styles._titleStyle}>Barcode Scanner</Text>
            <ActivityIndicator 
                size={24}
                color={'black'}
                style={{marginTop: 30}}
            />
        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    _titleStyle:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    }
});

export default Splash;