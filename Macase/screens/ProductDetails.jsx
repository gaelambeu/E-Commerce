import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import styles from './productDetails.style'
import { Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import {COLORS, SIZES} from '../constants/index' 

const ProductDetails = ({navigation}) => {

  const [count, setCount ] = useState(1);


  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count >1 ){
      setCount(count - 1)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <Image 
      source={{uri: "https://i.pinimg.com/564x/88/b9/82/88b9820cb6ddbeaf55ff56c08033cc8f.jpg"}}
      style={styles.image}
      />


      <View style={styles.details}>


        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>

          <View style={styles.priceWrapper}>
            <Text style={styles.price}>78 000 F CFA</Text>
          </View>
        </View>


        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1,2,3,4,5].map((index) => (   
              <Ionicons 
              key={index}
              name="star"
              size={24}
              color="gold"
              />
            ))}

            <Text style={styles.ratingText}> (4.9)</Text>
          </View>



          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
                <SimpleLineIcons 
                name="plus"
                size={20}
                />
            </TouchableOpacity>

            <Text style={styles.ratingText}>{count}</Text>

            <TouchableOpacity onPress={() => decrement()}>
                <SimpleLineIcons 
                name="minus"
                size={20}
                />
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit maxime sunt tempora officia veritatis iure est aut, cum sit doloremque aliquam inventore. Ullam laborum fugiat molestias, vero cupiditate dolore debitis. </Text>
        </View>


        <View style={{marginBottom: SIZES.small}}>
          <View style={styles.location}>

            <View style={{flexDirection: "row"}}>
              <Ionicons name="location-outline" size={20} />
              <Text>Abidjan(Port-Bouet) </Text>
            </View>

            <View style={{flexDirection: "row"}}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text> Livraison gratuite</Text>
            </View>

          </View>
        </View>

        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
              <Text style={styles.cartTitle}>ACHETER MAINTENANT</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.addCart}>
              <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>

      </View>

    </View>
  )
}

export default ProductDetails
