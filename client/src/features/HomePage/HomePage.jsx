import React, { useEffect } from 'react'
import CommonLayout from '../../components/Layout/CommonLayout'
import Banner from './components/Banner/Banner'

const HomePage = () => {
  useEffect(()=>{
    document.title="Trang chủ"
  },[])
  return (
    <CommonLayout>
        <Banner></Banner>
    </CommonLayout>
  )
}

export default HomePage