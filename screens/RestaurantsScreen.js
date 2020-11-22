import React from 'react'
import {View, StyleSheet,Text,Button} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { GoBack, GoToButton } from '../functions'
import { Option } from '../Option'
import Swiper from 'react-native-deck-swiper'
import { getRestaurantData } from '../api-functions'


export default class RestaurantsScreen extends React.Component{
  state = {
      cards: [],
      swipedAllCards: false,
      cardIndex: 0,
      loaded: false,
  }
  async componentDidMount(){
    let x;
    const cards=[];
    for (x of this.props.navigation.state.params.restaurantIDs){
      cards.push(await getRestaurantData(x))
    }
    this.setState({cards:cards})
    this.setState({loaded: true })
  }
  
  renderCard = (card, index) =>{
    console.log(card)
    return (
    <Option card = {card} />
    )
  }

  swipedLeft = () =>{
    this.swiper.swipeLeft()

  }

  swipedRight = (card) =>{
    this.props.navigation.navigate("Chosen",{card: card} )

  }

  swipedAll = () =>{
    this.setState({
      swipedAllCards: true
    })
  }
  
  swipedTop = (card) =>{
    this.props.navigation.navigate("RestaurauntInfo",{card: card} )

  }

  async function getData(card) {
    return(await getRestaurantData(card))
  }

  render () {
    return(
    <View style={styles.container}>
        <Swiper
            cards={this.props.navigation.state.params.restaurantIDs}
            renderCard={(card) => {
                const restaurantData = getData(card)
                return (
                    <View style={styles.card}>
                        <Text style={styles.text}>{card.name}</Text>
                        <Text style={styles.text}>{card.address}</Text>
                        <Text style={styles.text}>{card.rating}</Text>
                        <Text style={styles.text}>{card.price}</Text>
                    </View>
                )
            }}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            cardIndex={0}
            backgroundColor={'#4FD0E9'}
            stackSize= {3}>
            <Button
                onPress={() => {console.log('oulala')}}
                title="Press me">
                You can press me
            </Button>
        </Swiper>
    </View>
    )
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card:{
      flex: 1,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: "#E8E8E8",
      justifyContent: "center",
      backgroundColor: "white"

    },
  });
  