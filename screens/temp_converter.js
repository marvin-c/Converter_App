import { globalStyles } from '../styles/global';

import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const App = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  const handleCelsiusChange = (value) => {
    setCelsius(value);
    setFahrenheit((value * 9 / 5) + 32);
  }

  const handleFahrenheitChange = (value) => {
    setFahrenheit(value);
    setCelsius((value - 32) * 5 / 9);
  }

  return (
    <View style={globalStyles.container }>
      <Text>Celsius: {celsius}</Text>
      <TextInput
        style={globalStyles.input} 
        value={celsius}
        onChangeText={handleCelsiusChange}
        keyboardType="numeric"
      />
      <Text>Fahrenheit: {fahrenheit}</Text>
      <TextInput
        style={globalStyles.input} 
        value={fahrenheit}
        onChangeText={handleFahrenheitChange}
        keyboardType="numeric"
      />
    </View>
  );
};


export default App;