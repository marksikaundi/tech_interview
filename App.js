import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function App() {
  let [isLoading, setIsLoading] = useState(true);
  let [response, setResponse] = useState();
  let [error, setError] = useState();

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoading(false);
        setResponse(result);
      },
      // error hundling
      (error) => {
        setIsLoading(false);
        setError(error);
      }
    )
  }, []);

  // getting contents
  const getContent = () => {(isLoading)
    return <ActivityIndicator size="large" />
  }

  if (error) {
    return <Text>{error}</Text>
  }

  console.log(response);
  return <Text>oh its working</Text>

  return (
    <View style={styles.container}>
      {getContent()}
      <StatusBar style='auto' />
    </View>
  )
  }

const styles = StyleSheet.create({
  container: {

  }
});
