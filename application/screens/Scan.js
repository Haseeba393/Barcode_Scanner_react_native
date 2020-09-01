import React, {useState} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { RNCamera } from 'react-native-camera';

function Scan({navigation}){

    //variables initialization
    const [camRef, setCamRef] = useState(null);

    //on successfully scanning move to results screens
    function _onBarcodeScanned(code){
        navigation.reset({
            index: 0,
            routes: [{ name: 'result', params:{'code': code} }],
        });
    }

    return(
        <View style={Styles._mainContainer}>
            <RNCamera
                ref={ref => setCamRef(ref)}
                style={Styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                autoFocus='on'
                onBarCodeRead={_onBarcodeScanned}
            />
        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
    },
    preview: {
        flex: 1,
    },
});

export default Scan;