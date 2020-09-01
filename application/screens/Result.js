import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

function Result({navigation, route}){

    const {code} = route.params;

    //function go to scan screen again
    function _onScanAgainClick(){
        navigation.reset({
            index: 0,
            routes: [{ name: 'scan' }],
        });
    }

    return(
        <View style={Styles._mainContainer}>
            <Text style={Styles._heading}>Results</Text>
            <Text style={Styles._txtStyle}>Barcode Type: {code.type}</Text>
            <Text style={Styles._txtStyle}>Barcode Data: {code.data}</Text>
            <TouchableOpacity
                onPress={_onScanAgainClick}
                style={Styles._btn}>
                <Text style={{color: 'white'}}>Scan Again</Text>
            </TouchableOpacity>
        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
    _heading:{
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 30
    },
    _txtStyle:{
        fontSize: 18,
        color: 'black'
    },
    _btn:{
        width: '100%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 10,
        marginTop: 30
    },
});

export default Result;