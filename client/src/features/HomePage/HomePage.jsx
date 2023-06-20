import React, { useEffect } from 'react'
import CommonLayout from '../../components/Layout/CommonLayout'
import Banner from './components/Banner/Banner'
import FavoriteDestination from './components/FavoriteDestination/FavoriteDestination'
import FeedBack from './components/FeedBack/FeedBack'
import ServiceProvide from './components/ServiceProvide/ServiceProvide'
import TravelGuilde from './components/TravelGuide/TravelGuilde'
import SearchTourForm from '../../components/SearchTourForm/SearchTourForm'

const HomePage = () => {
  useEffect(()=>{
    document.title="Trang chủ"
  },[])
  return (
    <CommonLayout>
        <Banner></Banner>
        <SearchTourForm></SearchTourForm>
        <FavoriteDestination></FavoriteDestination>
        <ServiceProvide></ServiceProvide>
        <TravelGuilde></TravelGuilde>
        <FeedBack></FeedBack>
    </CommonLayout>
  )
}

export default HomePage