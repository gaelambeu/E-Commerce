import { View, Text } from 'react-native'
import {useState, useEffect} from 'react'

const useFetch = () => {
    const [data, detData] = useEffect([]);
    const [isLoading, setIsLoading] = useEffect(false);
    const [error, setError] = useState(null);


    const fetchData = async () => {
        setIsLoading(true)

        try {
            const response = await
        } catch (error) {
            
        }
    }

  return (
    <View>
      <Text>useFetch</Text>
    </View>
  )
}

export default useFetch