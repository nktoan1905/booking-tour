import React from 'react'
import "./style.css";
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const {newsId} = useParams();
  console.log(newsId)
  return (
    <div>NewsDetail</div>
  )
}

export default NewsDetail