import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function GetDataScreen() {

    const navigation = useNavigation();

    const [area, setArea] = useState('');
    const [activity, setActivity] = useState(false);

    const StartPrediction = () => {
        setActivity(true)
        console.log(area);

        // Perform your all Action here
        // once you successfully get the house price please pass it to below function as a argument 

        // just pass this result or predicted result
         onSuccess(area);
        

    }

    function onSuccess(result) {
        setActivity(false)
        navigation.navigate('ResultScreen', {
            itemParam: result,
            InputData: area
            
        })
    }

  return (
    <View style={styles.container}>
                <Text style={{ marginTop: '20%'}}>
                    Enter Area of house for Predication
                </Text>
            <View style={styles.backgroundStyle}>

                <TextInput 
                    style={styles.InputTextStyle}
                    placeholder="Area"
                    autoCapitalize="none"
                    autoCorrect={false}
                    editable={true}
                    label="Area"
                    value={area}
                    onChangeText={setArea}   
                    keyboardType='numeric' 
                        
                />
            </View>
            <TouchableOpacity onPress={() => StartPrediction()} style={styles.ButtonStyle}>
                {activity ? 
                    <ActivityIndicator size="small" color="white" />
                :
                    
                    <Text style={{ color: 'white'}}>
                        Start Prediction
                    </Text>
                }
                
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  
  },
  backgroundStyle: {
    backgroundColor: '#f0f5f5',
    height: (Dimensions.get('window').height)/14,
    marginHorizontal: 15,
    borderRadius: 20,
    flexDirection: 'row',
    width: '80%',
    marginTop: (Dimensions.get('window').height)/70
    
},
welcomeContainer: {
    marginTop: (Dimensions.get('window').height)/12, 
    marginBottom: (Dimensions.get('window').height)/12
},
InputTextStyle: {
    fontSize: 18,
    flex:1,
    marginLeft: '5%'
},
ButtonStyle: {
    backgroundColor: '#9999e6',
    height: (Dimensions.get('window').height)/14,
    marginHorizontal: 15,
    borderRadius: 20,
    flexDirection: 'row',
    width: '83%',
    marginTop: (Dimensions.get('window').height)/19,
    justifyContent: 'center',
    alignItems: 'center'
    
},
signupText: {
    flexDirection: 'row',
     marginTop: (Dimensions.get('window').height)/29
},

});