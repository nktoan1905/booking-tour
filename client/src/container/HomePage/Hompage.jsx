// eslint-disable-next-line no-unused-vars
import React from 'react'
import Footer from './components/Footer/Footer'
import FeedBack from './components/FeedBack/FeedBack'
import Banner from './components/Banner/Banner'
import TravelGuilde from './components/TravelGuilde/TravelGuilde'
import FavoriteDestination from './components/FavoriteDestination/FavoriteDestination'

const Hompage = () => {
  return (
    <React.Fragment>
        <Banner></Banner>
        <FavoriteDestination></FavoriteDestination>
        <TravelGuilde></TravelGuilde>
        <FeedBack></FeedBack>
        <Footer></Footer>
    </React.Fragment>
  )
}

export default Hompage