import React, { useState } from 'react'
import {Form,Input,Selection,S} from 'reactstrap'
import  axios from "axios"
import "../styles/Booking.css"

function BookingForm() {

    const [form, setform] = useState({user_name:"",
user_email:"",
// user_password:"",
car_model:"",
date:"",
prefer_time:""})
    const inputHandler=(e)=>{
        setform({...form,[e.target.name]:e.target.value,})
    

    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
       
        console.log(form)
        await axios.post("http://localhost:4000/booking",{form:form}).then(response=>{
            console.log(response)
        })
     
    }

   
  return (
    <div>
        <Form onSubmit={handleSubmit} method="POST">
        <Input type="text" name="user_name" required placeholder='Username' onChange={inputHandler}/>
        <Input type="email" placeholder='email' required name="user_email" onChange={inputHandler}/>
        <Input type="tel" placeholder='Phone' name="user_phn" onChange={inputHandler}/>
        <Input type="adress" placeholder='Address' name='user_address' unselectable='true' onChange={inputHandler}/>
            <Input type='date' name="date" onChange={inputHandler}/>
            <Input type="text" name="car_model" placeholder='Carmodel' onChange={inputHandler}/>
            <div className='time_wrap'>
            <input type="radio" name="prefer_time"  onChange={inputHandler}/><label>10-12</label>
            </div>
            <div className='time_wrap'>
            <input type="radio" name="prefer_time"  onChange={inputHandler}/><label>10-12</label>
            </div>
            <div className='time_wrap'>
            <input  type="radio" name="prefer_time"  onChange={inputHandler}/><label>10-12</label>
            </div>
            <div className='time_wrap'>
            <input type="radio" name="prefer_time" onSubmit={inputHandler} /><label>10-12</label>
            </div>
            <input type='submit' onClick={handleSubmit}/>
            <Input
      id="exampleSelectMulti"
      multiple
      name="selectMulti"
      type="select"
    >
     
    </Input>
        
        </Form>
    </div>
  )
}

export default BookingForm