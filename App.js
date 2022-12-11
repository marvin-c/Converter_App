import { StatusBar } from 'expo-status-bar';
import Home from './screens/home';
import Navigator from './routes/homeStack';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <Navigator />
  );
}

