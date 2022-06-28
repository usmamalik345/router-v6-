import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
    let {category} = useParams();
  return (
    <div>Post - {category} </div>
  )
}

export default Post