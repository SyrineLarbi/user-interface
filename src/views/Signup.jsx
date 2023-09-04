import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [data,setData] = useState({})
    const navigate = useNavigate()
    const [images, setImages] = useState([])
    const onChangeHandler = (e) =>{
        setData({...data,
        [e.target.name] : e.target.value
    })
    }
  return (
    <div>Signup</div>
  )
}

export default Signup