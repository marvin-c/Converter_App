import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { globalStyles } from '../styles/global';


const App = () => {
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [rateNZDAUD, setRateNZDAUD] = useState(0.94);
  const [rateNZDUSD, setRateNZDUSD] = useState(0.64);
  const [rateAUDUSD, setRateAUDUSD] = useState(0.68);
  const [rateAUDNZD, setRateAUDNZD] = useState(1.06);
  const [rateUSDNZD, setRateUSDNZD] = useState(1.56);


  const handleInputChange = (value) => {
    setInput(value);
    if (selectedCurrency === 'NZDAUD') {
      setOutput(value * rateNZDAUD);
    } else if (selectedCurrency === 'NZDUSD') {
      setOutput(value * rateNZDUSD);
    } else if (selectedCurrency === 'AUDUSD') {
      setOutput(value * rateAUDUSD);
    } else if (selectedCurrency === 'AUDNZD') {
      setOutput(value * rateAUDNZD);
    } else if (selectedCurrency === 'USDNZD') {
      setOutput(value * rateUSDNZD);      
    }
  }

  return (
    <View>
      <Text>Input:</Text>
      <TextInput
        value={input}
        style={globalStyles.input} 
        onChangeText={handleInputChange}
        keyboardType="numeric"
      />
      <Text>Select Currency:</Text>
      <Picker
        selectedValue={selectedCurrency}
        onValueChange={setSelectedCurrency}
      >
        <Picker.Item label="1 NZD --> 0.94 AUD" value="NZDAUD" />
        <Picker.Item label="1 NZD --> 0.64 USD" value="NZDUSD" />
        <Picker.Item label="1 AUD --> 0.68 USD" value="AUDUSD" />        
        <Picker.Item label="1 AUD --> 1.06 NZD" value="AUDNZD" />        
        <Picker.Item label="1 USD --> 1.56 NZD" value="USDNZD" />        
      </Picker>
      <Text>Output: {output}</Text>
    </View>
  );
};

export default App;
