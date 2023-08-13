import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box"
import { COLORS } from '../../constants'

const Carousel = () => {
    const slides = [
      "https://i.pinimg.com/564x/e5/59/03/e559037a266cf434719813faf199fb56.jpg", 
      "https://i.pinimg.com/564x/eb/50/15/eb50155493984b6eded7444da744783b.jpg",
      "https://i.pinimg.com/564x/bc/51/5b/bc515bcdeebfe74eb1d5f111fcad4d45.jpg",
      "https://i.pinimg.com/564x/73/12/3e/73123e14b06d61e48910b57f6796d8bc.jpg",
      "https://i.pinimg.com/564x/56/6e/11/566e11bc5a4f5a7571d26363f839f158.jpg",
      "https://i.pinimg.com/564x/19/8a/87/198a8791a416bab49a5e75e30f512c84.jpg"
    ]
  return (
    <View style={styles.carouselContainer}>
      <SliderBox images={slides}
        dotColor= {COLORS.primary}
        inactiveDotColor = {COLORS.secondary}
        ImageComponentStyle = {{borderRadius: 15, width: "95%", marginTop: 15}}
        autoplay
        circleLoop
      />
      
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center"
  }
})