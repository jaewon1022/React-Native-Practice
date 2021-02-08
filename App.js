import axios from 'axios';
import React from 'react';
import { PermissionsAndroid, View, Text, StyleSheet, Button } from 'react-native';

const getLocationPermission = async() => {
  try{
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.ACCESS_COARSE_LOCATION,
      {
        title: "위치 정보 수집 권한",
        message: "이 앱을 이용하려면 위치 정보 수집 권한에 동의하셔야 합니다.",
        buttonPositive: "동의",
        buttonNegative: "동의하지 않음"
      }
    );
    if(granted === PermissionsAndroid.RESULTS.GRANTED){
      console.log("위치 정보 권한 획득함");
    }
    else{
      console.log("위치 정보 권한 획득하지 못 함");
    }
  } catch (err){
    console.warn(err);
  }
};

const App: () => React$Node = () => {
  // const [data, setData] = React.useState([]);
  // const [loading, setLoading] = React.useState(true);
  <View style={styles.Container}>
    <Text style={styles.halfContainer}>
      권한 요청하기
    </Text>
    <Button title="request Permissions" onPress = {getLocationPermission}/>
  </View>
};

const styles = StyleSheet.create({
  Container: {
    flex:1,
    justifyContent:'center'
  },
  halfContainer :{
    flex:1,
    justifyContent:'center',
    textAlign:'center'
  }
});

export default App;
